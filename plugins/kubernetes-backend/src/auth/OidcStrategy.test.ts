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

import { ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER } from '@backstage/plugin-kubernetes-common';
import { OidcStrategy } from './OidcStrategy';

describe('OidcStrategy tests', () => {
  const strategy = new OidcStrategy();

  it('returns cluster details with auth token', async () => {
    const details = await strategy.decorateClusterDetailsWithAuth(
      {
        name: 'test',
        url: '',
        authMetadata: {
          authProvider: 'oidc',
          [ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER]: 'okta',
        },
      },
      {
        oidc: { okta: 'fakeToken' },
      },
    );

    expect(details.authMetadata.serviceAccountToken).toBe('fakeToken');
  });

  it('returns error when oidcTokenProvider is not configured', async () => {
    await expect(
      strategy.decorateClusterDetailsWithAuth(
        {
          name: 'test',
          url: '',
          authMetadata: { authProvider: 'oidc' },
        },
        {},
      ),
    ).rejects.toThrow(
      'oidc authProvider requires a configured oidcTokenProvider',
    );
  });

  it('returns error when token is not included in request body', async () => {
    await expect(
      strategy.decorateClusterDetailsWithAuth(
        {
          name: 'test',
          url: '',
          authMetadata: {
            authProvider: 'oidc',
            [ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER]: 'okta',
          },
        },
        {},
      ),
    ).rejects.toThrow('Auth token not found under oidc.okta in request body');
  });
});
