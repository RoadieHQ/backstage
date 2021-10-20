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
import {
  makeStyles,
  Grid,
  List,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Content, Page, InfoCard } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useScorecardData } from '../../hooks/useScorecardData';
import { BooleanCheckResult } from '@backstage/plugin-tech-insights-common';

const useStyles = makeStyles(() => ({
  listItem: {
    paddingLeft: 0,
  },
  contentScorecards: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export const CheckName = (check: any) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <ListItemText primary={check.name} />
    </ListItem>
  );
};

type Props = {
  checks: BooleanCheckResult[];
};

export const ChecksOverview = ({ checks }: Props) => {
  const classes = useStyles();
  const { entity } = useEntity();
  const scorecardName = useScorecardData(entity);

  const listItems = checks.map(check => (
    <ListItem className={classes.listItem}>
      <ListItemText primary={check.check.name} />
    </ListItem>
  ));

  const statusItems = checks.map(check => (
    <ListItem className={classes.listItem}>
      <ListItemText
        primary={
          check.result ? (
            <CheckCircleOutline color="primary" />
          ) : (
            <ErrorOutlineIcon color="error" />
          )
        }
      />
    </ListItem>
  ));

  return (
    <Page themeId="home">
      <Content className={classes.contentScorecards}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <InfoCard title={scorecardName}>
              <Grid container direction="row">
                <Grid item xs={8}>
                  <Typography variant="h6">Check name</Typography>
                  <List>{listItems}</List>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6">Status</Typography>
                  <List>{statusItems}</List>
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
