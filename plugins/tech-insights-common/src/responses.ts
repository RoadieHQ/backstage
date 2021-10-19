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

/**
 * @public
 *
 * Response type for checks.
 */
export interface CheckResponse {
  /**
   * Identifier of the Check
   */
  id: string;
  /**
   * Human readable name of the Check
   */
  name: string;
  /**
   * Description of the Check
   */
  description: string;

  /**
   * A collection of references to fact rows used to run this checks against
   */
  factRefs: string[];

  /**
   * Metadata related to a check.
   * Can contain links, additional description texts and other actionable data.
   *
   * Currently loosely typed, but in the future when patterns emerge, key shapes can be defined
   */
  metadata?: Record<string, any>;
}

/**
 * @public
 *
 * Individual fact response type.
 * Keyed by the name of the fact
 */
export type FactResponse = {
  [key: string]: {
    /**
     * Reference and unique identifier of the fact row
     */
    ref: string;
    /**
     * Type of the individual fact value
     *
     * Numbers are split into integers and floating point values.
     * `set` indicates a collection of values
     */
    type: 'integer' | 'float' | 'string' | 'boolean' | 'datetime' | 'set';

    /**
     * Description of the individual fact
     */
    description: string;

    /**
     * Actual value of the fact
     */
    value: number | string | boolean | DateTime | [];

    /**
     * An optional SemVer version identifying when this fact was added to the FactSchema
     */
    since?: string;

    /**
     * Metadata related to an individual fact.
     * Can contain links, additional description texts and other actionable data.
     *
     * Currently loosely typed, but in the future when patterns emerge, key shapes can be defined
     */
    metadata?: Record<string, any>;

    /**
     * A list of entity kind descriptors to indicate if this fact is valid for an entity kind
     */
    entityKinds: string[];
  };
};
