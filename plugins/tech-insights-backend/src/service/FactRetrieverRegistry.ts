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

import { FactRetriever, FactSchema } from '../types';
import { ConflictError, NotFoundError } from '@backstage/errors';

export class FactRetrieverRegistry {
  private readonly retrievers = new Map<string, FactRetriever>();

  constructor(retrievers: FactRetriever[]) {
    retrievers.forEach(it => {
      this.register(it);
    });
  }

  register(retriever: FactRetriever) {
    if (this.retrievers.has(retriever.ref)) {
      throw new ConflictError(
        `Tech insight fact retriever with reference '${retriever.ref}' has already been registered`,
      );
    }
    this.retrievers.set(retriever.ref, retriever);
  }

  get(retrieverReference: string): FactRetriever {
    const retriever = this.retrievers.get(retrieverReference);
    if (!retriever) {
      throw new NotFoundError(
        `Tech insight fact retriever with reference '${retrieverReference}' is not registered.`,
      );
    }
    return retriever;
  }

  list(): FactRetriever[] {
    return [...this.retrievers.values()];
  }

  getSchemas(): FactSchema[] {
    return this.list().map(it => it.schema);
  }
}
