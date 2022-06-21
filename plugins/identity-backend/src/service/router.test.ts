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
import { createRouter } from './router';
import supertest from 'supertest';
import { ConfigReader } from '@backstage/config';
import { createLogger } from 'winston';
import express from 'express';

describe('Router', () => {
  describe('/user', () => {
    it('should return ok when there is no token', async () => {
      const config = new ConfigReader({ backend: { baseUrl: 'lol' } });

      const router = await createRouter({ config, logger: createLogger() });
      const app = express().use(router);

      const { body } = await supertest(app).get('/user');

      expect(body).toEqual({});
    });

    it('should return ok when there is a token', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyOmRlZmF1bHQvZ3Vlc3QifQ.elzBaDb3wYEcy9GNERD0uXaJCUqBlzfALLQHQT6CST4';

      const config = new ConfigReader({ backend: { baseUrl: 'lol' } });

      const router = await createRouter({ config, logger: createLogger() });
      const app = express().use(router);

      const { body } = await supertest(app)
        .get('/me')
        .set('Authorization', `Bearer ${token}`);

      expect(body).toEqual({ user: { entityRef: 'user:default/guest' } });
    });
  });
});
