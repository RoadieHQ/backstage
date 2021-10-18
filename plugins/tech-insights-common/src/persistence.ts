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
import { FactSchema, TechInsightFact } from './facts';
import { DateTime } from 'luxon';

/**
 * TechInsights Database
 *
 * @public
 */
export interface TechInsightsStore {
  /**
   * Stores fact containers as rows into data store.
   * Individual items in array correspond to a fact schema based on reference and entity based on entity identifier.
   *
   * Each row may contain multiple individual facts and values
   *
   * @param facts - A collection of TechInsightFacts
   */
  insertFacts(facts: TechInsightFact[]): Promise<void>;

  /**
   * @param refs - A collection of reference string to a fact row
   * @param entity - A string identifying an entity. In a format namespace/kind/name
   *
   * @returns - An object keyed by a fact reference and containing an individual TechInsightFact
   */
  getLatestFactsForRefs(
    refs: string[],
    entity: string,
  ): Promise<{ [factRef: string]: TechInsightFact }>;

  /**
   * Retrieves fact values identified by fact row references for an individual entity.
   *
   * @param refs - A collection of reference string to a fact row
   * @param entity - A string identifying an entity. In a format namespace/kind/name
   * @param startDateTime - DateTime object indicating start of the time frame
   * @param endDateTime - DateTime object indicating start of the time frame
   *
   * @returns - An object keyed by a fact reference and containing a collection of TechInsightFacts matching the time frame
   */
  getFactsBetweenTimestampsForRefs(
    refs: string[],
    entity: string,
    startDateTime: DateTime,
    endDateTime: DateTime,
  ): Promise<{ [factRef: string]: TechInsightFact[] }>;

  /**
   * Stores versioned fact schemas into data store
   *
   * @param ref - Identifier of the fact schema. Reference to a fact retriever.
   * @param schema - The actual schema to store
   */
  insertFactSchema(ref: string, schema: FactSchema): Promise<void>;

  /**
   * Retrieves latest versions (as defined by semver) of fact schemas from the data store.
   *
   * @param refs - Collection of refs to return. If omitted, all Schemas should be returned.
   * @returns - A collection of schemas
   */
  getLatestSchemas(refs?: string[]): Promise<FactSchema[]>;
}
