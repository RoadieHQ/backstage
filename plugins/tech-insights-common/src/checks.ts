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
import { TechInsightsStore } from './persistence';
import { CheckResponse, FactResponse } from './responses';

export interface FactCheckerFactory<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  construct(
    repository: TechInsightsStore,
  ): FactChecker<CheckType, CheckResultType>;
}

export interface FactChecker<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  runChecks(entity: string, checks: string[]): Promise<CheckResultType[]>;
  addCheck(check: CheckType): Promise<boolean>;
  getChecks(): CheckType[];
  validate(check: CheckType): Promise<boolean>;
}

export interface TechInsightCheckRegistry<CheckType extends TechInsightCheck> {
  register(check: CheckType): void;
  get(checkId: string): CheckType;
  getAll(checks: string[]): CheckType[];
  list(): CheckType[];
}

/**
 * Generic CheckResult
 *
 * Should be parseable by the frontend to display a check result.
 * A collection of these should be parseable by the frontend to display scorecards
 */
export type CheckResult = {
  facts: FactResponse;
  check: CheckResponse;
};

export interface BooleanCheckResult extends CheckResult {
  result: boolean;
}

export interface TechInsightCheck {
  id: string;
  name: string;
  description: string;
  factRefs: string[];
  successMetadata?: Record<string, any>;
  failureMetadata?: Record<string, any>;
}
