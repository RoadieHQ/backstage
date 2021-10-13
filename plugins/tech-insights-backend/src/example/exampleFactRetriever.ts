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
import { FactRetriever } from '@backstage/plugin-tech-insights-common';
import { CatalogClient } from '@backstage/catalog-client';

export const exampleFactRetriever = {
  ref: 'demo-poc.factretriever',
  schema: {
    version: '0.1.0',
    schema: {
      examplenumberfact: {
        type: 'integer',
        description: '',
        entityKinds: ['component'],
      },
      examplestringfact: {
        type: 'string',
        description: '',
        entityKinds: ['component'],
      },
      examplefloatfact: {
        type: 'float',
        description: '',
        entityKinds: ['component'],
      },
      examplebooleanfact: {
        type: 'boolean',
        description: '',
        entityKinds: ['component'],
      },
      exampledatetimefact: {
        type: 'datetime',
        description: '',
        entityKinds: ['component'],
      },
    },
  },
  handler: async _ctx => {
    const { config, discovery } = _ctx;
    const catalogClient = new CatalogClient({ discoveryApi: discovery });
    const entities = await catalogClient.getEntities();

    return Promise.resolve(
      entities.items.map(it => {
        return {
          ref: 'demo-poc.factretriever',
          entity: {
            namespace: it.metadata.namespace,
            kind: it.kind,
            name: it.metadata.name,
          },
          facts: {
            examplenumberfact: 2,
            examplestringfact: 'stringy',
            examplefloatfact: 0.331,
            examplebooleanfact: false,
            exampledatetimefact: DateTime.now(),
          },
        };
      }),
    );
  },
} as FactRetriever;
