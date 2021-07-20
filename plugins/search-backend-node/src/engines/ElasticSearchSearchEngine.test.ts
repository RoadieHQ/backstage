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

import { getVoidLogger } from '@backstage/backend-common';
import { SearchEngine } from '../types';
import {
  ConcreteElasticSearchQuery,
  ElasticSearchSearchEngine,
} from './ElasticSearchSearchEngine';
import { Client } from '@elastic/elasticsearch';
import Mock from '@elastic/elasticsearch-mock';

class ElasticSearchSearchEngineForTranslatorTests extends ElasticSearchSearchEngine {
  getTranslator() {
    return this.translator;
  }
}

const mock = new Mock();
const client = new Client({
  node: 'http://localhost:9200',
  Connection: mock.getConnection(),
});

mock.add(
  {
    method: 'POST',
    path: '*',
  },
  () => ({
    hits: {
      total: { value: 0, relation: 'eq' },
      hits: [],
    },
  }),
);

describe('ElasticSearchSearchEngine', () => {
  let testSearchEngine: SearchEngine;
  let inspectableSearchEngine: ElasticSearchSearchEngineForTranslatorTests;

  beforeEach(() => {
    testSearchEngine = new ElasticSearchSearchEngine(
      client,
      '',
      '',
      getVoidLogger(),
    );
    inspectableSearchEngine = new ElasticSearchSearchEngineForTranslatorTests(
      client,
      '',
      '',
      getVoidLogger(),
    );
  });

  describe('translator', () => {
    it('query translator invoked', async () => {
      const translatorSpy = jest.fn().mockReturnValue({
        elasticQueryBuilder: () => ({
          toJSON: () =>
            JSON.stringify({
              query: {
                match_all: {},
              },
            }),
        }),
        documentFields: [],
      });
      testSearchEngine.setTranslator(translatorSpy);

      await testSearchEngine.query({
        term: 'testTerm',
        filters: {},
        pageCursor: '',
      });

      expect(translatorSpy).toHaveBeenCalledWith({
        term: 'testTerm',
        filters: {},
        pageCursor: '',
      });
    });

    it('should return translated query', async () => {
      const translatorUnderTest = inspectableSearchEngine.getTranslator();

      const mockThis = { documentTypes: { indexName: { fieldName: '*' } } };

      const actualTranslatedQuery = translatorUnderTest.bind(mockThis)({
        term: 'testTerm',
        filters: {},
        pageCursor: '',
      }) as ConcreteElasticSearchQuery;

      expect(actualTranslatedQuery).toMatchObject({
        documentFields: ['fieldName'],
        elasticQueryBuilder: expect.any(Function),
      });

      const queryBody = actualTranslatedQuery.elasticQueryBuilder();

      expect(queryBody.toJSON()).toEqual({
        query: {
          bool: {
            must: {
              multi_match: {
                query: 'testTerm',
                fields: ['fieldName'],
                fuzziness: 'auto',
                minimum_should_match: 1,
              },
            },
            filter: [],
          },
        },
        size: 100,
      });
    });

    it('should return translated query with 1 filter', async () => {
      const translatorUnderTest = inspectableSearchEngine.getTranslator();

      const actualTranslatedQuery = translatorUnderTest({
        term: 'testTerm',
        filters: { kind: 'testKind' },
        pageCursor: '',
      }) as ConcreteElasticSearchQuery;

      expect(actualTranslatedQuery).toMatchObject({
        documentTypes: undefined,
        lunrQueryBuilder: expect.any(Function),
      });

      const queryBody = actualTranslatedQuery.elasticQueryBuilder();

      expect(queryBody).toBe({});
    });

    it('should return translated query with multiple filters', async () => {
      const translatorUnderTest = inspectableSearchEngine.getTranslator();

      const actualTranslatedQuery = translatorUnderTest({
        term: 'testTerm',
        filters: { kind: 'testKind', namespace: 'testNameSpace' },
        pageCursor: '',
      }) as ConcreteElasticSearchQuery;

      expect(actualTranslatedQuery).toMatchObject({
        documentTypes: undefined,
        lunrQueryBuilder: expect.any(Function),
      });

      const queryBody = actualTranslatedQuery.elasticQueryBuilder();

      expect(queryBody).toBe({});
    });

    it('should throw if translated query references missing field', async () => {
      const translatorUnderTest = inspectableSearchEngine.getTranslator();

      const actualTranslatedQuery = translatorUnderTest({
        term: 'testTerm',
        filters: { kind: 'testKind' },
        pageCursor: '',
      }) as ConcreteElasticSearchQuery;

      expect(actualTranslatedQuery).toMatchObject({
        documentTypes: undefined,
        lunrQueryBuilder: expect.any(Function),
      });

      const queryBody = actualTranslatedQuery.elasticQueryBuilder();

      expect(queryBody).toBe({});
    });
  });

  describe('query', () => {
    it('should perform search query and return 0 results on empty index', async () => {
      const querySpy = jest.spyOn(testSearchEngine, 'query');

      // Perform search query and ensure the query func was invoked.
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTerm',
        filters: {},
        pageCursor: '',
      });

      expect(querySpy).toHaveBeenCalled();
      expect(querySpy).toHaveBeenCalledWith({
        term: 'testTerm',
        filters: {},
        pageCursor: '',
      });

      // Should return 0 results as nothing is indexed here
      expect(mockedSearchResult).toMatchObject({ results: [] });
    });

    it('should perform search query and return 0 results on no match', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'unknown',
        filters: {},
        pageCursor: '',
      });

      // Should return 0 results as we are mocking the indexing of 1 document but with no match on the fields
      expect(mockedSearchResult).toMatchObject({ results: [] });
    });

    it('should perform search query and return all results on empty term', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: '',
        filters: {},
        pageCursor: '',
      });

      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test/location',
            },
            type: 'test-index',
          },
        ],
      });
    });

    it('should perform search query and return search results on match', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitle',
        filters: {},
        pageCursor: '',
      });

      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test/location',
            },
          },
        ],
      });
    });

    it('should perform search query and return search results on partial match', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitle',
        filters: {},
        pageCursor: '',
      });

      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test/location',
            },
          },
        ],
      });
    });

    it('should perform search query and return search results on fuzzy match', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitel', // Intentional typo
        filters: {},
        pageCursor: '',
      });

      // Should return 1 result as we are mocking the indexing of 1 document with match on the title field
      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test/location',
            },
          },
        ],
      });
    });

    it('should perform search query with trailing punctuation and return search results on match (trimming)', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'Hello World.',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'World',
        filters: {},
        pageCursor: '',
      });

      // Should return 1 result as we are mocking the indexing of 1 document with match on the title field
      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'Hello World.',
              location: 'test/location',
            },
          },
        ],
      });
    });

    it('should perform search query by similar words and return search results on match (stemming)', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'Searching',
          location: 'test/location',
        },
      ];

      // Mock indexing of 1 document
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'Search',
        filters: {},
        pageCursor: '',
      });

      // Should return 1 result as we are mocking the indexing of 1 document with match on the title field
      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'Searching',
              location: 'test/location',
            },
          },
        ],
      });
    });

    it('should perform search query and return search results on match with filters', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location2',
        },
      ];

      // Mock indexing of 2 documents
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitle',
        filters: { location: 'test/location2' },
        pageCursor: '',
      });

      // Should return 1 of 2 results as we are
      // 1. Mocking the indexing of 2 documents
      // 2. Matching on the location field with the filter { location: 'test/location2' }
      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test/location2',
            },
          },
        ],
      });
    });

    it('should perform search query and return search results on match with filter and not fail on missing field', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
      ];

      const mockDocuments2 = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location2',
          extraField: 'testExtraField',
        },
      ];

      // Mock 2 indices with 1 document each
      await testSearchEngine.index('test-index', mockDocuments);
      await testSearchEngine.index('test-index-2', mockDocuments2);
      // Perform search query scoped to "test-index-2" with a filter on the field "extraField"
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitle',
        pageCursor: '',
        filters: { extraField: 'testExtraField' },
      });

      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test/location2',
              extraField: 'testExtraField',
            },
          },
        ],
      });
    });

    it('should perform search query and return search results on match with filters that include a : character', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test:location',
        },
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test:location2',
        },
      ];

      // Mock indexing of 2 documents
      await testSearchEngine.index('test-index', mockDocuments);

      // Perform search query
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitle',
        filters: { location: 'test:location2' },
        pageCursor: '',
      });

      // Should return 1 of 2 results as we are
      // 1. Mocking the indexing of 2 documents
      // 2. Matching on the location field with the filter { location: 'test:location2' }
      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              title: 'testTitle',
              text: 'testText',
              location: 'test:location2',
            },
          },
        ],
      });
    });

    it('should perform search query and return search results on match, scoped to specific index', async () => {
      const mockDocuments = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location',
        },
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location2',
        },
      ];

      const mockDocuments2 = [
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location3',
        },
        {
          title: 'testTitle',
          text: 'testText',
          location: 'test/location4',
        },
      ];

      // Mock 2 indices with 2 documents each
      await testSearchEngine.index('test-index', mockDocuments);
      await testSearchEngine.index('test-index-2', mockDocuments2);

      // Perform search query scoped to "test-index-2"
      const mockedSearchResult = await testSearchEngine.query({
        term: 'testTitle',
        types: ['test-index-2'],
        pageCursor: '',
      });

      expect(mockedSearchResult).toMatchObject({
        results: [
          {
            document: {
              location: 'test/location3',
              text: 'testText',
              title: 'testTitle',
            },
          },
          {
            document: {
              location: 'test/location4',
              text: 'testText',
              title: 'testTitle',
            },
          },
        ],
      });
    });
  });

  describe('index', () => {
    it('should index document', async () => {
      const indexSpy = jest.spyOn(testSearchEngine, 'index');
      const mockDocuments = [
        {
          title: 'testTerm',
          text: 'testText',
          location: 'test/location',
        },
      ];

      // call index func and ensure the index func was invoked.
      await testSearchEngine.index('test-index', mockDocuments);
      expect(indexSpy).toHaveBeenCalled();
      expect(indexSpy).toHaveBeenCalledWith('test-index', [
        { title: 'testTerm', text: 'testText', location: 'test/location' },
      ]);
    });
  });
});
