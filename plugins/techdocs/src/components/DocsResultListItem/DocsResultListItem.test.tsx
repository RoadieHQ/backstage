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

import React from 'react';
import { render } from '@testing-library/react';
import { DocsResultListItem } from './DocsResultListItem';

// Using canvas to render text..
jest.mock('react-text-truncate', () => {
  return ({ text }: { text: string }) => <span>{text}</span>;
});

const validResult = {
  location: 'https://backstage.io/docs',
  title: 'Documentation Docs Docs',
  text: 'Backstage is an open-source developer portal that puts the developer experience first.',
  kind: 'library',
  namespace: '',
  name: 'Backstage',
  lifecycle: 'production',
};

describe('DocsResultListItem test', () => {
  it('should render search doc passed in', async () => {
    const { findByText } = render(<DocsResultListItem result={validResult} />);

    expect(await findByText('Documentation Docs Docs')).toBeInTheDocument();
    expect(
      await findByText(
        'Backstage is an open-source developer portal that puts the developer experience first.',
      ),
    ).toBeInTheDocument();
  });
});
