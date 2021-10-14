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
  DynamicFactCallback,
  FactOptions,
  TopLevelCondition,
} from 'json-rules-engine';
import {
  BooleanCheckResult,
  CheckResponse,
  TechInsightCheck,
} from '@backstage/plugin-tech-insights-common';

interface DynamicFact<T = unknown> {
  id: string;
  calculationMethod: DynamicFactCallback<T> | T;
  options?: FactOptions;
}

export type Rule = {
  conditions: TopLevelCondition;
  name?: string;
  priority?: number;
};

export interface TechInsightJsonRuleCheck extends TechInsightCheck {
  rule: Rule;
  dynamicFacts?: DynamicFact[];
}

type ResponseTopLevelCondition =
  | { all: CheckCondition[] }
  | { any: CheckCondition[] };

type CheckCondition = {
  operator: string;
  fact: string;
  factValue: any;
  factResult: any;
  result: boolean;
};

export interface JsonRuleCheckResponse extends CheckResponse {
  conditions: ResponseTopLevelCondition & {
    priority: number;
  };
}

export interface JsonRuleBooleanCheckResult extends BooleanCheckResult {
  check: JsonRuleCheckResponse;
}
