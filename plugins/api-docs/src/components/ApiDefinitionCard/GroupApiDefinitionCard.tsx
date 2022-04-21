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

import { ApiEntity } from '@backstage/catalog-model';
import { useEntity, useRelatedEntities } from '@backstage/plugin-catalog-react';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { apiDocsConfigRef } from '../../config';
import { PlainApiDefinitionWidget } from '../PlainApiDefinitionWidget';

import {
  CardTab,
  Progress,
  Select,
  TabbedCard,
} from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';

export const GroupApiDefinitionCard = () => {
  const { entity } = useEntity<ApiEntity>();
  const { loading, error, entities } = useRelatedEntities(entity, {
    type: 'ownerOf',
    kind: 'api',
  });
  const [selectedEntity, setSelectedEntity] = useState<any>();
  const config = useApi(apiDocsConfigRef);
  useEffect(() => {
    if (entities && entities.length > 0) setSelectedEntity(entities[0]);
  }, [entities]);
  const { getApiDefinitionWidget } = config;

  if (!entity) {
    return <Alert severity="error">Could not fetch the API</Alert>;
  }

  if (!selectedEntity) {
    return <Alert severity="error">Could not fetch the APIssss</Alert>;
  }
  if (loading) {
    return <Progress />;
  }

  const definitionWidget = getApiDefinitionWidget(selectedEntity);
  const entityTitle = entity.metadata.title ?? entity.metadata.name;
  console.log(entities, '2');
  const items = entities.map(e => ({
    value: JSON.stringify(e),
    label: e.metadata.name,
  }));
  if (definitionWidget) {
    return (
      <>
        <Select
          selected={items[0].value}
          label="versions"
          onChange={e => {
            setSelectedEntity(JSON.parse(e));
          }}
          items={items}
          key="al"
        />
        <TabbedCard title={entityTitle}>
          <CardTab label={definitionWidget.title} key="widget">
            {definitionWidget.component(selectedEntity.spec.definition)}
          </CardTab>
          <CardTab label="Raw" key="raw">
            <PlainApiDefinitionWidget
              definition={selectedEntity.spec.definition}
              language={
                definitionWidget.rawLanguage || selectedEntity.spec.type
              }
            />
          </CardTab>
        </TabbedCard>
      </>
    );
  }

  return (
    <TabbedCard
      title={entityTitle}
      children={[
        // Has to be an array, otherwise typescript doesn't like that this has only a single child
        <CardTab label={entity.spec.type} key="raw">
          <PlainApiDefinitionWidget
            definition={entity.spec.definition}
            language={entity.spec.type}
          />
        </CardTab>,
      ]}
    />
  );
};
