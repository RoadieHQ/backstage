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
import { DateTime } from 'luxon';
import { Config } from '@backstage/config';
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
  timestamp?: DateTime;
};

export type FactValueDefinitions = {
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
