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

export const exampleChecks = [
  {
    name: 'demodatacheck', // This name is used as an identifier when check is wanted to run
    description: 'A fact check for demoing purposes',
    factRefs: ['demo-poc.factretriever'], // References a fact with these names
    rule: {
      conditions: {
        all: [
          {
            fact: 'examplenumberfact',
            operator: 'greaterThanInclusive',
            value: 2,
          },
          {
            fact: 'examplestringfact',
            operator: 'equal',
            value: 'stringy',
          },
          {
            fact: 'examplefloatfact',
            operator: 'greaterThanInclusive',
            value: 0.2,
          },
          {
            fact: 'examplebooleanfact',
            operator: 'equal',
            value: false,
          },
          // TODO: example how to add a custom operator to fact checker
        ],
      },
      event: {
        type: 'demo-data-success-event',
        params: {
          message: 'Check successful for demo data. Green!',
        },
      },
    },
  },
] as TechInsightJsonRuleCheck[];
