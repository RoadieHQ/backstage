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

import { ScorecardsApi } from './ScorecardsApi';
import {
  BooleanCheckResult,
  CheckResult,
} from '@backstage/plugin-tech-insights-common';
import { DiscoveryApi } from '@backstage/core-plugin-api';

export type Options = {
  discoveryApi: DiscoveryApi;
  proxyPath?: string;
};

export class ScorecardsClient implements ScorecardsApi {
  private readonly discoveryApi: DiscoveryApi;
  private baseUrl: string = '';

  constructor(options: Options) {
    this.discoveryApi = options.discoveryApi;
  }

  getBaseUrl: () => Promise<string> = async () => {
    if (!this.baseUrl) {
      this.baseUrl = await this.discoveryApi.getBaseUrl('tech-insights');
    }
    return this.baseUrl;
  };

  async fetchAllChecks(): Promise<CheckResult[]> {
    const url = await this.getBaseUrl();
    const allChecks = await fetch(`${url}/checks`);
    const payload = await allChecks.json();
    const checks = payload.map((check: any) => check.id);
    if (!allChecks.ok) {
      throw new Error(payload.errors[0]);
    }
    return checks;
  }

  async fetchChecks({
    namespace,
    kind,
    name,
  }: {
    namespace: string;
    kind: string;
    name: string;
  }): Promise<BooleanCheckResult[]> {
    const url = await this.getBaseUrl();
    const allChecks = await this.fetchAllChecks();
    const response = await fetch(
      `${url}/checks/${namespace}/${kind}/${name}?checks[]=${allChecks}`,
    );
    const result = await response.json();
    return result;
  }
}
