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

import { TechInsightJsonRuleCheck } from '../types';
import {
  BooleanCheckResult,
  FactChecker,
  FactSchema,
  TechInsightsStore,
} from '@backstage/plugin-tech-insights-common';
import { Engine } from 'json-rules-engine';
import { TechInsightCheckRegistry } from './CheckRegistry';

class JsonRulesEngineFactChecker
  implements FactChecker<TechInsightJsonRuleCheck, BooleanCheckResult>
{
  private readonly checkRegistry: TechInsightCheckRegistry<TechInsightJsonRuleCheck>;
  private repository: TechInsightsStore;
  private readonly schemas: FactSchema[];

  constructor(
    schemas: FactSchema[],
    checks: TechInsightJsonRuleCheck[],
    repository: TechInsightsStore,
  ) {
    this.repository = repository;
    this.schemas = schemas;
    checks.forEach(check => this.validate(check));
    this.checkRegistry = new TechInsightCheckRegistry(checks);
  }

  async check(entity: string, checkName: string): Promise<BooleanCheckResult> {
    const engine = new Engine();
    const techInsightCheck = this.checkRegistry.get(checkName);
    const facts = await this.repository.getLatestFactsForRefs(
      techInsightCheck.factRefs,
      entity,
    );

    engine.addRule(techInsightCheck.rule);

    if (techInsightCheck.dynamicFacts) {
      techInsightCheck.dynamicFacts.forEach(it =>
        engine.addFact(it.id, it.calculationMethod, it.options),
      );
    }

    const facts1 = Object.values(facts).reduce(
      (acc, it) => ({ ...acc, ...it.facts }),
      {},
    );
    const results = await engine.run(facts1);

    // TODO: maybe cache/store in DB
    const firstRuleResult = results.results[0];
    const firstEvent = results.events[0];
    return {
      facts: Object.values(facts),
      value: firstRuleResult.result,
      text: firstEvent.params?.message,
      check: techInsightCheck,
    };
  }

  validate(check: TechInsightJsonRuleCheck): Promise<boolean> {
    const schemas = this.schemas;
    const rule = check.rule;
    console.log(schemas.length);
    console.log(rule.conditions);
    // Check that all keys referred in the check exists in the schemas of facts listed in the factRef array
    return Promise.resolve(false);
  }

  getChecks(): TechInsightJsonRuleCheck[] {
    return this.checkRegistry.list();
  }

  addCheck(check: TechInsightJsonRuleCheck): Promise<boolean> {
    return this.validate(check);
  }
}

export class Factory {
  private readonly checks: TechInsightJsonRuleCheck[];
  constructor(checks: TechInsightJsonRuleCheck[]) {
    this.checks = checks;
  }

  construct(schemas: FactSchema[], repository: TechInsightsStore) {
    return new JsonRulesEngineFactChecker(schemas, this.checks, repository);
  }
}
