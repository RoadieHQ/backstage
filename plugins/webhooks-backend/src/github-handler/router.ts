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

import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { EventStoreClient } from '../events-backend/event-store-client';

export interface RouterOptions {}

export async function createRouter({ eventEmitter }): Promise<express.Router> {
  const router = Router();

  const eventStoreClient = new EventStoreClient({ topic: 'github' });

  router.use(express.json());

  router.get('/github', (_, response) => {
    response.send({ status: 'ok' });
  });
  router.get('/github/health', (_, response) => {
    response.send({ status: 'ok' });
  });

  router.post('/github', (req, response) => {
    // console.log(req);
    eventEmitter.emit('github', {
      type: 'added',
      ref: 'some awesome repo that got modified',
    });
    // // filter the event with github specific processor -> publish the outcome message
    // if (req.body.ref.contains(req.body.repository.default_branch)) {
    //   //Filter out commits if a catalog-info.yaml file has changed in this event
    //   //   req.body.commits.forEach((commit: any) => {
    //   //     commit.added.filter((f: any) => f.contains('catalog-info.yaml'));
    //   //     commit.modified.filter((f: any) => f.contains('catalog-info.yaml'));
    //   //     commit.removed.filter((f: any) => f.contains('catalog-info.yaml'));
    //   //   });
    // }

    response.send({ status: 'ok' });
  });

  router.use(errorHandler());
  return router;
}
