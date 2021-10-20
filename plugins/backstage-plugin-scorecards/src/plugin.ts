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

import {
  createPlugin,
  createRoutableExtension,
  createComponentExtension,
  createApiFactory,
  discoveryApiRef,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';
import { scorecardsApiRef } from './api/ScorecardsApi';
import { ScorecardsClient } from './api';

export const backstagePluginScorecardsPlugin = createPlugin({
  id: 'backstage-plugin-scorecards',
  apis: [
    createApiFactory({
      api: scorecardsApiRef,
      deps: { discoveryApi: discoveryApiRef },
      factory: ({ discoveryApi }) => new ScorecardsClient({ discoveryApi }),
    }),
  ],
  routes: {
    root: rootRouteRef,
  },
});

export const BackstagePluginScorecardsPage =
  backstagePluginScorecardsPlugin.provide(
    createRoutableExtension({
      name: 'BackstagePluginScorecardsPage',
      component: () =>
        import('./components/ScorecardsPage').then(m => m.ScorecardsPage),
      mountPoint: rootRouteRef,
    }),
  );

export const ScorecardsWidget = backstagePluginScorecardsPlugin.provide(
  createComponentExtension({
    component: {
      lazy: () =>
        import('./components/ScorecardsWidget/index').then(
          m => m.ScorecardsWidget,
        ),
    },
  }),
);
