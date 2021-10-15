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
import { DefaultTechInsightsBuilder } from './service/DefaultTechInsightsBuilder';
import { createRouter } from './service/router';
import { getVoidLogger } from '@backstage/backend-common';
import { ConfigReader } from '@backstage/config';
import request from 'supertest';
import express from 'express';
import { DatabaseManager } from './service/persistence/DatabaseManager';

describe('Tech Insights integration tests', () => {
  let app: express.Express;
  beforeAll(async () => {
    const techInsightsContext = await new DefaultTechInsightsBuilder({
      database: {
        getClient: () => DatabaseManager.createTestDatabaseConnection(),
      },
      logger: getVoidLogger(),

      factRetrievers: [],
      config: ConfigReader.fromConfigs([]),
      discovery: {
        getBaseUrl: (_: string) => Promise.resolve('http://mock.url'),
        getExternalBaseUrl: (_: string) => Promise.resolve('http://mock.url'),
      },
    }).build();

    const router = await createRouter({
      logger: getVoidLogger(),
      config: ConfigReader.fromConfigs([]),
      ...techInsightsContext,
    });

    app = express().use(router);
  });

  it('should return not contain check endpoints when checker not present', async () => {
    await request(app).get('/tech-insights/checks').expect(404);
    await request(app).get('/tech-insights/checks/a/a/a').expect(404);
  });
});
