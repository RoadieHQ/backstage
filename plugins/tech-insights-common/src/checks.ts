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

/**
 * A factory wrapper to construct FactChecker implementations.
 *
 * @public
 * @typeParam CheckType - Implementation specific Check. Can extend TechInsightCheck with additional information
 * @typeParam CheckResultType - Implementation specific result of a check. Can extend CheckResult with additional information
 */
export interface FactCheckerFactory<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  /**
   * @param repository - TechInsightsStore
   * @returns an implementation of a FactChecker for generic types defined in the factory
   */
  construct(
    repository: TechInsightsStore,
  ): FactChecker<CheckType, CheckResultType>;
}

/**
 * FactChecker interface
 *
 * A generic interface that can be implemented to create checkers for specific check and check return types.
 * This is used
 *
 * @public
 * @typeParam CheckType - Implementation specific Check. Can extend TechInsightCheck with additional information
 * @typeParam CheckResultType - Implementation specific result of a check. Can extend CheckResult with additional information
 */
export interface FactChecker<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  /**
   * Runs checks against an entity
   *
   * @param entity - A reference to an entity to run checks against. In a format namespace/kind/name
   * @param checks - A collection of checks to run against provided entity
   * @returns - A collection containing check/fact information and the actual results of the check
   */
  runChecks(entity: string, checks: string[]): Promise<CheckResultType[]>;

  /**
   * Adds and stores new checks so they can be run checks against.
   *
   * @param check - The actual check to be added.
   * @returns  - An indicator if fact was successfully added
   */
  addCheck(check: CheckType): Promise<boolean>;

  /**
   * Retrieves all available checks that can be used to run checks against
   *
   * @returns - A collection of checks
   */
  getChecks(): Promise<CheckType[]>;

  /**
   * Validates if check is valid and can be run with the current implementation
   *
   * @param check - The check to be validated
   * @returns - Validation result
   */
  validate(check: CheckType): Promise<boolean>;
}

/**
 * Registry containing checks for tech insights.
 *
 * @public
 * @typeParam CheckType - Implementation specific Check. Can extend TechInsightCheck with additional information
 *
 */
export interface TechInsightCheckRegistry<CheckType extends TechInsightCheck> {
  /**
   * Stores checks into a registry.
   *
   * @param check - The actual check to be stored
   */
  register(check: CheckType): Promise<void>;

  /**
   * Retrieves a specific check from the registry
   *
   * @param checkId - Check identifier to be retrieved
   * @returns - The actual check. `never` if specified identifier cannot be used to find a check
   */
  get(checkId: string): Promise<CheckType>;

  /**
   * Retrieves multiple checks from the registry
   *
   * @param checks - a collection of string identifiers of checks to be retrieved
   * @returns - A collection of checks
   */
  getAll(checks: string[]): Promise<CheckType[]>;

  /**
   * Lists all checks in the registry
   *
   * @returns - A collection of checks
   */
  list(): Promise<CheckType[]>;
}

/**
 * Generic CheckResult
 *
 * Contains information about the facts used to calculate the check result
 * and information about the check itself. Both include metadata to
 * A collection of these should be parseable by the frontend to display scorecards
 *
 * @public
 */
export type CheckResult = {
  /**
   * Facts used to calculate this CheckResult
   */
  facts: FactResponse;
  /**
   * The check used to calculate this CheckResult
   */
  check: CheckResponse;
};

/**
 * CheckResult of type Boolean.
 *
 * @public
 */
export interface BooleanCheckResult extends CheckResult {
  /**
   * Actual result value of this CheckResult
   */
  result: boolean;
}

/**
 * Generic definition of a check for Tech Insights
 *
 * @public
 */
export interface TechInsightCheck {
  /**
   * Unique identifier of the check
   *
   * Used to identify which checks to use when running checks
   */
  id: string;

  /**
   * Human readable name for the check
   */
  name: string;
  /**
   * Description of the check
   */
  description: string;

  /**
   * A collection of string referencing fact rows that a check will be run against.
   *
   * References the fact container, aka fact retriever itself which may or may not contain multiple individual facts and values
   */
  factRefs: string[];

  /**
   * Metadata to be returned in case a check has been successfully evaluated
   * Can contain links, description texts or other actionable items
   */
  successMetadata?: Record<string, any>;

  /**
   * Metadata to be returned in case a check evaluation has ended in failure
   * Can contain links, description texts or other actionable items
   */
  failureMetadata?: Record<string, any>;
}
