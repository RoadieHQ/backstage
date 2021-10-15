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

import express from 'express';
import Router from 'express-promise-router';
import { Config } from '@backstage/config';
import {
  FactChecker,
  TechInsightCheck,
  CheckResult,
} from '@backstage/plugin-tech-insights-common';
import { Logger } from 'winston';
import { DateTime } from 'luxon';
import { PersistenceContext } from './persistence/DatabaseManager';

export interface RouterOptions<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  factChecker?: FactChecker<CheckType, CheckResultType>;
  persistenceContext: PersistenceContext;
  config: Config;
  logger: Logger;
}

export async function createRouter<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
>(options: RouterOptions<CheckType, CheckResultType>): Promise<express.Router> {
  const router = Router();

  const { persistenceContext, factChecker, logger } = options;
  const { techInsightsStore } = persistenceContext;

  if (factChecker) {
    logger.info('Fact checker configured. Enabling fact checking endpoints.');
    router.get('/checks', (_req, res) => {
      return res.send(factChecker.getChecks());
    });

    router.get('/checks/:namespace/:kind/:name', async (req, res) => {
      const { namespace, kind, name } = req.params;
      const checks = req.query.checks as string[];
      const entityTriplet = `${namespace.toLowerCase()}/${kind.toLowerCase()}/${name.toLowerCase()}`;
      const checkResult = await factChecker.runChecks(entityTriplet, checks);
      return res.send(checkResult);
    });
  } else {
    logger.info(
      'Starting tech insights module without fact checking endpoints.',
    );
  }

  router.get('/fact-schemas', async (req, res) => {
    const refs = req.query.refs as string[];
    return res.send(await techInsightsStore.getLatestSchemas(refs));
  });

  router.get('/facts/latest/:namespace/:kind/:name', async (req, res) => {
    const { namespace, kind, name } = req.params;
    const refs = req.query.refs as string[];
    const entityTriplet = `${namespace.toLowerCase()}/${kind.toLowerCase()}/${name.toLowerCase()}`;
    return res.send(
      await techInsightsStore.getLatestFactsForRefs(refs, entityTriplet),
    );
  });

  router.get('/facts/range/:namespace/:kind/:name', async (req, res) => {
    const { namespace, kind, name } = req.params;
    const refs = req.query.refs as string[];
    const startDatetime = DateTime.fromISO(req.query.startDatetime as string);
    const endDatetime = DateTime.fromISO(req.query.endDatetime as string);
    const entityTriplet = `${namespace.toLowerCase()}/${kind.toLowerCase()}/${name.toLowerCase()}`;
    return res.send(
      await techInsightsStore.getFactsBetweenTimestampsForRefs(
        refs,
        entityTriplet,
        startDatetime,
        endDatetime,
      ),
    );
  });
  return router;
}
