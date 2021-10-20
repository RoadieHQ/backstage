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
  Theme,
  Grid,
  List,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Content, Header, Page, InfoCard } from '@backstage/core-components';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    padding: theme.spacing(1, 0),
    textAlign: 'center',
    marginBottom: '0px',
  },
  listItem: {
    paddingLeft: 0,
  },
  contentScorecards: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  tableClass: {
    paddingTop: theme.spacing(1, 0),
  },
  infoCardTitle: {
    padding: theme.spacing(1.2, 0, 0, 1),
  },
  trendStyle: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'end',
  },
}));

export const ScorecardsWidget = () => {
  const classes = useStyles();

  return (
    <InfoCard className={classes.infoCardTitle} title="Scorecards">
      <Grid container direction="row">
        <Grid item xs={8}>
          <Typography variant="h6">Scorecard name</Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Has an owner" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Has a package.json" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Checks passing</Typography>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText primary="2/3" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="2/2" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </InfoCard>
  );
};
