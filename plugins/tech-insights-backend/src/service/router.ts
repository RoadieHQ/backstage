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
  TechInsightsStore,
  FactChecker,
  TechInsightCheck,
  CheckResult,
} from '@backstage/plugin-tech-insights-common';
import { Logger } from 'winston';
import { DateTime } from 'luxon';

export interface RouterOptions<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
> {
  factChecker: FactChecker<CheckType, CheckResultType>;
  repository: TechInsightsStore;
  config: Config;
  logger: Logger;
}

export async function createRouter<
  CheckType extends TechInsightCheck,
  CheckResultType extends CheckResult,
>(options: RouterOptions<CheckType, CheckResultType>): Promise<express.Router> {
  const router = Router();

  const { repository, factChecker } = options;

  router.get('/checks', (_req, res) => {
    return res.send(factChecker.getChecks());
  });

  router.get('fact-schemas', (req, res) => {
    const refs = req.query.refs as string[];
    return res.send(repository.getLatestSchemas(refs));
  });

  router.get('/checks/:check/:namespace/:kind/:name', async (req, res) => {
    const { namespace, kind, name, check } = req.params;
    const entityTriplet = `${namespace.toLowerCase()}/${kind.toLowerCase()}/${name.toLowerCase()}`;
    const checkResult = await factChecker.check(entityTriplet, check);
    return res.send(checkResult);
  });

  router.get('facts/latest/:namespace/:kind/:name', (req, res) => {
    const { namespace, kind, name } = req.params;
    const refs = req.query.refs as string[];
    const entityTriplet = `${namespace.toLowerCase()}/${kind.toLowerCase()}/${name.toLowerCase()}`;
    return res.send(repository.getLatestFactsForRefs(refs, entityTriplet));
  });

  router.get('facts/range/:namespace/:kind/:name', (req, res) => {
    const { namespace, kind, name } = req.params;
    const refs = req.query.refs as string[];
    const startDatetime = DateTime.fromISO(req.query.startDatetime as string);
    const endDatetime = DateTime.fromISO(req.query.endDatetime as string);
    const entityTriplet = `${namespace.toLowerCase()}/${kind.toLowerCase()}/${name.toLowerCase()}`;
    return res.send(
      repository.getFactsBetweenTimestampsForRefs(
        refs,
        entityTriplet,
        startDatetime,
        endDatetime,
      ),
    );
  });

  // get scorecards (aggregation of checks)

  return router;
}
