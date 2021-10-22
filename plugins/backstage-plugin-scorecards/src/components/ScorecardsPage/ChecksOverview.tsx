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

import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Content, Page, InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useScorecardData } from '../../hooks/useScorecardData';
import {
  CheckResponse,
  FactResponse,
} from '@backstage/plugin-tech-insights-common';
import ArrowDownardRounded from '@material-ui/icons/ArrowDownwardRounded';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined';
import { BackstageTheme } from '@backstage/theme';

const useStyles = makeStyles((theme: BackstageTheme) => ({
  listItem: {
    display: 'flex',
    paddingLeft: '0',
    flexWrap: 'wrap',
  },
  listItemText: {
    paddingRight: '1rem',
    flex: '0 1 auto',
  },
  contentScorecards: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  details: {
    width: '100%',
    padding: '1rem',
    backgroundColor: theme.palette.background.default,
  },
  icon: {
    marginLeft: 'auto',
  },
}));

type DataResult = {
  check: CheckResponse;
  facts: FactResponse;
  result: boolean;
};

type DataResults = {
  checksValue: DataResult[];
};

export const ChecksOverview = (checksValue: DataResults) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { entity } = useEntity();
  const scorecardName = useScorecardData(entity);

  const handleArrowClick = () => {
    setOpen(!open);
  };

  const listItems = checksValue.checksValue.map(c => (
    <ListItem className={classes.listItem}>
      <ListItemText primary={c.check.name} className={classes.listItemText} />
      <IconButton onClick={handleArrowClick}>
        {open ? (
          <ArrowUpwardOutlined color="primary" />
        ) : (
          <ArrowDownardRounded color="primary" />
        )}
      </IconButton>
      {c.check.type === 'json-rules-engine' &&
        (c.result ? (
          <CheckCircleOutline className={classes.icon} color="primary" />
        ) : (
          <ErrorOutlineIcon className={classes.icon} color="error" />
        ))}
      {c.check.type !== 'json-rules-engine' && (
        <p className={classes.icon} color="primary">
          {c.result}
        </p>
      )}
      {open && (
        <div className={classes.details}>
          <p>{c.check.description}</p>
        </div>
      )}
    </ListItem>
  ));

  return (
    <Page themeId="home">
      <Content className={classes.contentScorecards}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <InfoCard title={scorecardName}>
              <Grid container direction="row">
                <Grid item>
                  <Typography variant="h6">Check name</Typography>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={9}>
                  {listItems}
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
