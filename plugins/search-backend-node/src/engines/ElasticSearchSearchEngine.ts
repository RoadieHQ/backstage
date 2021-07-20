/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  IndexableDocument,
  SearchQuery,
  SearchResultSet,
} from '@backstage/search-common';
import { Logger } from 'winston';
import { SearchEngine } from '../types';
import esb from 'elastic-builder';
import { Client } from '@elastic/elasticsearch';
import { Config } from '@backstage/config';
import {
  createAWSConnection,
  awsGetCredentials,
} from '@acuris/aws-es-connection';
import { isEmpty, isNaN as nan, isNumber } from 'lodash';

export type ConcreteElasticSearchQuery = {
  documentFields?: string[];
  elasticQueryBuilder: () => any;
};

type ElasticConfigAuth = {
  username: string;
  password: string;
  apiKey: string;
  bearer: string;
};

type ElasticSearchQueryTranslator = (
  query: SearchQuery,
) => ConcreteElasticSearchQuery;

type ElasticSearchOptions = {
  logger: Logger;
  config: Config;
  aliasPostfix?: string;
  indexPrefix?: string;
};

type ElasticSearchResult = {
  _index: string;
  _type: string;
  _score: number;
  _source: IndexableDocument;
};

function duration(startTimestamp: [number, number]): string {
  const delta = process.hrtime(startTimestamp);
  const seconds = delta[0] + delta[1] / 1e9;
  return `${seconds.toFixed(1)}s`;
}

function isBlank(str: string) {
  return (isEmpty(str) && !isNumber(str)) || nan(str);
}

export class ElasticSearchSearchEngine implements SearchEngine {
  private documentTypes: Record<string, IndexableDocument> = {};

  constructor(
    private readonly elasticSearchClient: Client,
    private readonly aliasPostfix: string,
    private readonly indexPrefix: string,
    private readonly logger: Logger,
  ) {}

  static async initialize({
    logger,
    config,
    aliasPostfix = `search`,
    indexPrefix = ``,
  }: ElasticSearchOptions) {
    return new ElasticSearchSearchEngine(
      await ElasticSearchSearchEngine.constructElasticSearchClient(
        logger,
        config.getConfig('search.elasticSearch'),
      ),
      aliasPostfix,
      indexPrefix,
      logger,
    );
  }

  private static async constructElasticSearchClient(
    logger: Logger,
    config?: Config,
  ) {
    if (!config) {
      throw new Error('No elastic search config found');
    }

    if (config.getOptionalString('provider') === 'custom') {
      logger.info('Initializing ElasticSearch search engine.');
      return new Client({
        node: config.getString('node'),
        auth: config.get<ElasticConfigAuth>('auth'),
      });
    }
    if (config.getOptionalString('provider') === 'elastic') {
      logger.info('Initializing Elastic.co ElasticSearch search engine.');
      return new Client({
        cloud: {
          id: config.getString('cloudId'),
        },
        auth: config.get<ElasticConfigAuth>('auth'),
      });
    }
    if (config.getOptionalString('provider') === 'aws') {
      logger.info('Initializing AWS ElasticSearch search engine.');
      const awsCredentials = await awsGetCredentials();
      const AWSConnection = createAWSConnection(awsCredentials);
      return new Client({
        node: config.getString('node'),
        ...AWSConnection,
      });
    }
    throw new Error('Failed to initialize ElasticSearch client');
  }

  protected translator({
    term,
    filters = {},
    types,
  }: SearchQuery): ConcreteElasticSearchQuery {
    const searchableFields = [
      ...new Set(
        types
          ? types.flatMap(it => {
              if (!this.documentTypes[it]) return [];
              return Object.keys(this.documentTypes[it]).map(key => key);
            })
          : Object.values(this.documentTypes).flatMap(it =>
              Object.keys(it).map(key => key),
            ),
      ),
    ];
    return {
      elasticQueryBuilder: () => {
        const filterConditions = Object.entries(filters)
          .filter(([_, value]) => Boolean(value))
          .map(([key, value]) => {
            if (['string', 'number', 'boolean'].includes(typeof value)) {
              return esb.matchQuery(key, value!!.toString());
            }
            if (Array.isArray(value)) {
              return esb
                .boolQuery()
                .should(value.map(it => esb.matchQuery(key, it!!.toString())));
            }
            this.logger.error(
              'Failed to query, unrecognized filter type',
              key,
              value,
            );
            throw new Error(
              'Failed to add filters to query. Unrecognized filter type',
            );
          });
        const q = isBlank(term)
          ? esb.matchAllQuery()
          : esb
              .multiMatchQuery(searchableFields, term)
              .fuzziness('auto')
              .minimumShouldMatch(1);
        return esb
          .requestBodySearch()
          .query(esb.boolQuery().filter(filterConditions).must([q]))
          .size(100); // TODO: Replace with page cursor after pagination approach decided
      },
      documentFields: searchableFields,
    };
  }

  setTranslator(translator: ElasticSearchQueryTranslator) {
    this.translator = translator;
  }

  async index(type: string, documents: IndexableDocument[]): Promise<void> {
    this.logger.info(
      `Started indexing ${documents.length} documents for index ${type}`,
    );
    const startTimestamp = process.hrtime();

    const alias = this.constructSearchAlias(type);
    const aliases = await this.elasticSearchClient.cat.aliases({
      format: 'json',
      name: alias,
    });
    const removableIndices = aliases.body.map(
      (r: Record<string, any>) => r.index,
    );
    const index = this.constructIndexName(type, `${Date.now()}`);

    await this.elasticSearchClient.indices.create({
      index,
    });
    const result = await this.elasticSearchClient.helpers.bulk({
      datasource: documents,
      onDocument() {
        return {
          index: { _index: index },
        };
      },
      refreshOnCompletion: index,
    });

    this.documentTypes[type] = documents[0];
    this.logger.info(
      `Indexing completed for index ${type} in ${duration(startTimestamp)}`,
      result,
    );
    await this.elasticSearchClient.indices.updateAliases({
      body: {
        actions: [
          { remove: { index: this.constructIndexName(type, '*'), alias } },
          { add: { index, alias } },
        ],
      },
    });

    this.logger.info('Removing stale search indices', removableIndices);
    await this.elasticSearchClient.indices.delete({ index: removableIndices });
  }

  async query(query: SearchQuery): Promise<SearchResultSet> {
    const { elasticQueryBuilder } = this.translator(
      query,
    ) as ConcreteElasticSearchQuery;
    const queryIndices = query.types
      ? query.types.map(it => this.constructSearchAlias(it))
      : this.constructSearchAlias('*');
    const body = elasticQueryBuilder().toJSON();
    const result = await this.elasticSearchClient.search({
      index: queryIndices,
      body,
    });
    return {
      results: result.body.hits.hits.map((d: ElasticSearchResult) => ({
        type: d._index.split('__')[0],
        document: d._source,
      })),
    };
  }

  private constructIndexName(type: string, postFix: string) {
    return `${this.indexPrefix}${type}-index__${postFix}`;
  }

  private constructSearchAlias(type: string) {
    return `${this.indexPrefix}${type}__${this.aliasPostfix}`;
  }
}
