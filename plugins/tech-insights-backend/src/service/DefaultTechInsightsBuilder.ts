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

import { FactRetrieverEngine } from './fact/FactRetrieverEngine';
import { Logger } from 'winston';
import { FactRetrieverRegistry } from './fact/FactRetrieverRegistry';
import { Config } from '@backstage/config';
import {
  PluginDatabaseManager,
  PluginEndpointDiscovery,
} from '@backstage/backend-common';
import { TechInsightsDatabase } from './persistence/TechInsightsDatabase';
import {
  CheckResult,
  FactChecker,
  FactCheckerFactory,
  FactRetrieverRegistration,
  TechInsightCheck,
  TechInsightsStore,
} from '@backstage/plugin-tech-insights-common';

export interface TechInsightsOptions<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  logger: Logger;
  factRetrievers: FactRetrieverRegistration[];
  factCheckerFactory: FactCheckerFactory<CheckType, CheckResultType>;
  config: Config;
  discovery: PluginEndpointDiscovery;
  database: PluginDatabaseManager;
}

export type TechInsightsContext<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> = {
  factChecker: FactChecker<CheckType, CheckResultType>;
  repository: TechInsightsStore;
};

export class DefaultTechInsightsBuilder<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  private readonly options: TechInsightsOptions<CheckType, CheckResultType>;

  constructor(options: TechInsightsOptions<CheckType, CheckResultType>) {
    this.options = options;
  }

  async build(): Promise<TechInsightsContext<CheckType, CheckResultType>> {
    const {
      factRetrievers,
      factCheckerFactory,
      config,
      discovery,
      database,
      logger,
    } = this.options;

    const factRetrieverRegistry = new FactRetrieverRegistry(factRetrievers);

    const repository = await TechInsightsDatabase.create(
      await database.getClient(),
    );

    const factRetrieverEngine = await FactRetrieverEngine.create(
      repository,
      factRetrieverRegistry,
      {
        config,
        discovery,
        logger,
      },
    );

    const factChecker = factCheckerFactory.construct(
      factRetrieverRegistry.getSchemas(),
      repository,
    );

    factRetrieverEngine.schedule();

    return {
      repository,
      factChecker,
    };
  }
}
