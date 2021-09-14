/*
 * Copyright 2020 The Backstage Authors
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
  createRouter,
  FactRetriever,
  TechInsightCheck,
  TechInsightsBuilder,
} from '@backstage/plugin-tech-insights-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { DateTime } from 'luxon';

export default async function createPlugin({
  logger,
  config,
  discovery,
  database,
}: PluginEnvironment): Promise<Router> {
  const factRetrievers = [
    {
      cadence: '* 1 * * *',
      ref: 'demo-poc.factretriever',
      schema: {
        version: '0.1.0',
        schema: {
          testnumberfact: {
            type: 'integer',
          },
          teststringfact: {
            type: 'string',
          },
          testfloatfact: {
            type: 'float',
          },
          testbooleanfact: {
            type: 'boolean',
          },
          testdatetimefact: {
            type: 'datetime',
          },
        },
      },
      handler: _ctx => {
        return Promise.resolve([
          {
            ref: 'demo-poc.factretriever',
            entity: {
              namespace: 'a',
              kind: 'a',
              name: 'a',
            },
            facts: {
              testnumberfact: 2,
              teststringfact: 'stringy',
              testfloatfact: 0.331,
              testbooleanfact: false,
              testdatetimefact: DateTime.now(), // TODO: example how to add a custom operator to fact checker
            },
          },
        ]);
      },
    },
  ] as FactRetriever[];

  const checks = [
    {
      name: 'demodatacheck',
      description: 'A fact check for demoing purposes',
      factRefs: ['demo-poc.factretriever'],
      rule: {
        conditions: {
          all: [
            {
              fact: 'testnumberfact',
              operator: 'greaterThanInclusive',
              value: 2,
            },
            {
              fact: 'teststringfact',
              operator: 'equal',
              value: 'stringy',
            },
            {
              fact: 'testfloatfact',
              operator: 'greaterThanInclusive',
              value: 0.2,
            },
            {
              fact: 'testbooleanfact',
              operator: 'equal',
              value: false,
            },
          ],
        },
        event: {
          type: 'demo-data-success-event',
          params: {
            message: 'Everything matches for demo data. Green!',
          },
        },
      },
    },
  ] as TechInsightCheck[];

  const builder = new TechInsightsBuilder({
    logger,
    config,
    database,
    discovery,
    factRetrievers,
    checks,
  });

  return await createRouter({
    ...(await builder.build()),
    logger,
    config,
  });
}
