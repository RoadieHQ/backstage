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
  FactRetriever,
  FactRetrieverContext,
  TechInsightsStore,
} from '@backstage/plugin-tech-insights-common';
import { FactRetrieverRegistry } from './FactRetrieverRegistry';
import cron, { ScheduledTask } from 'node-cron';
import { Logger } from 'winston';

function randomDailyCron() {
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  return `${rand(0, 59)} ${rand(0, 23)} * * *`;
}

function duration(startTimestamp: [number, number]): string {
  const delta = process.hrtime(startTimestamp);
  const seconds = delta[0] + delta[1] / 1e9;
  return `${seconds.toFixed(1)}s`;
}

export class FactRetrieverEngine {
  private scheduledJobs = new Map<string, ScheduledTask>();

  constructor(
    readonly repository: TechInsightsStore,
    readonly factRetrieverRegistry: FactRetrieverRegistry,
    readonly factRetrieverContext: FactRetrieverContext,
    readonly logger: Logger,
  ) {}
  static async create(
    repository: TechInsightsStore,
    factRetrieverRegistry: FactRetrieverRegistry,
    factRetrieverContext: FactRetrieverContext,
  ) {
    await Promise.all(
      factRetrieverRegistry
        .listRetrievers()
        .map(it => repository.insertFactSchema(it.ref, it.schema)),
    );

    return new FactRetrieverEngine(
      repository,
      factRetrieverRegistry,
      factRetrieverContext,
      factRetrieverContext.logger,
    );
  }

  schedule() {
    const registrations = this.factRetrieverRegistry.listRegistrations();
    registrations.forEach(registration => {
      const { factRetriever, cadence } = registration;
      if (!this.scheduledJobs.has(factRetriever.ref)) {
        const job = cron.schedule(
          cadence || randomDailyCron(),
          this.createFactRetrieverHandler(factRetriever),
        );
        this.scheduledJobs.set(factRetriever.ref, job);
      }
    });
  }

  getJob(ref: string) {
    return this.scheduledJobs.get(ref);
  }

  private createFactRetrieverHandler(factRetriever: FactRetriever) {
    return async () => {
      const startTimestamp = process.hrtime();
      this.logger.info(
        `Retrieving facts for fact retriever ${factRetriever.ref}`,
      );
      const facts = await factRetriever.handler(this.factRetrieverContext);
      if (this.logger.isDebugEnabled()) {
        this.logger.debug(
          `Retrieved ${facts.length} facts for fact retriever ${
            factRetriever.ref
          } in ${duration(startTimestamp)}`,
        );
      }

      try {
        await this.repository.insertFacts(facts);
        this.logger.info(
          `Stored ${facts.length} facts for fact retriever ${
            factRetriever.ref
          } in ${duration(startTimestamp)}`,
        );
        this.logger.info(``);
      } catch (e) {
        this.logger.warn(
          `Failed to insert facts for fact retriever ${factRetriever.ref}`,
          e,
        );
      }
    };
  }
}
