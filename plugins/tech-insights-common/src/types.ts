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

import { Config } from '@backstage/config';
import { DateTime } from 'luxon';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { Logger } from 'winston';

export type TechInsightFact = {
  ref: string;
  entity: {
    namespace: string;
    kind: string;
    name: string;
  };
  facts: Record<string, number | string | boolean | DateTime | []>;
};

type FactValueDefinitions = {
  [key: string]: {
    type: 'integer' | 'float' | 'string' | 'boolean' | 'datetime' | 'set';
    description: string;
    since?: string;
    metadata?: Record<string, any>;
    entityKinds: string[];
  };
};
export type FactSchema = {
  version: string;
  schema: FactValueDefinitions;
};

export type FactRetrieverContext = {
  config: Config;
  discovery: PluginEndpointDiscovery;
  logger: Logger;
};

// TODO: Possibly add return type type param
export interface FactRetriever {
  ref: string;

  handler: (ctx: FactRetrieverContext) => Promise<TechInsightFact[]>;

  schema: FactSchema;
}

export type FactRetrieverRegistration = {
  factRetriever: FactRetriever;

  /**
   * Cron expression to indicate when the retriever should be triggered.
   * Defaults to a random point in time every 24h
   *
   * To be complemented with an event listening solution when bus across the app is implemented
   */
  cadence?: string;
};

export interface FactCheckerFactory<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  construct(
    schemas: FactSchema[],
    repository: TechInsightsStore,
  ): FactChecker<CheckType, CheckResultType>;
}

export interface FactChecker<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  check(entity: string, checkName: string): Promise<CheckResultType>;
  addCheck(check: CheckType): Promise<boolean>;
  getChecks(): CheckType[];
  validate(check: CheckType): Promise<boolean>;
}

/**
 * Generic CheckResult
 *
 * Should be parseable by the frontend to display a check result.
 * A collection of these should be parseable by the frontend to display scorecards
 */
export type CheckResult = {
  text: string;
  facts: TechInsightFact[];
  check: TechInsightCheck;
};

export interface BooleanCheckResult extends CheckResult {
  value: boolean;
}

export interface TechInsightCheck {
  name: string;
  description?: string;
  factRefs: string[];
}

export interface TechInsightsStore {
  insertFacts(facts: TechInsightFact[]): Promise<void>;

  getLatestFactsForRefs(
    refs: string[],
    entity: string,
  ): Promise<{ [factRef: string]: TechInsightFact }>;

  getFactsBetweenTimestampsForRefs(
    refs: string[],
    entity: string,
    startDateTime: DateTime,
    endDateTime: DateTime,
  ): Promise<{ [factRef: string]: TechInsightFact }>;

  insertFactSchema(ref: string, schema: FactSchema): Promise<void>;

  getLatestSchemas(refs: string[]): Promise<FactSchema[]>;
}
