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
import { makeStyles, Theme, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useScorecardData } from '../../hooks/useScorecardData';
import { InfoCard, Progress } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { scorecardsApiRef } from '../../api';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) => ({
  infoCardTitle: {
    padding: theme.spacing(1.2, 0, 0, 1),
  },
}));

export const ScorecardsWidget = () => {
  const classes = useStyles();
  const { entity } = useEntity();
  const { namespace, kind, name } = useParams();
  const scorecardName = useScorecardData(entity);
  const api = useApi(scorecardsApiRef);

  const { value, loading, error } = useAsync(
    async () => await api.fetchChecks({ namespace, kind, name }),
  );

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  const passedChecks = value.filter(v => v.result).length;

  return (
    <InfoCard className={classes.infoCardTitle} title="Scorecards">
      <Grid container direction="row">
        <Grid item xs={8}>
          <Typography variant="h6">Scorecard name</Typography>
          <h3>{scorecardName}</h3>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Score</Typography>
          <h3>
            {passedChecks || 0}/{value.length || 0}
          </h3>
        </Grid>
      </Grid>
    </InfoCard>
  );
};
