import { Grid, LinearProgress } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';

import './thirty-day-challenge-spend-progress-bar.scss';

export const ThirtyDayChallengeSpendProgressBar = () => {
  return (
    <Grid container={true} className={'spend-progress'}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <LinearProgress variant="determinate" value={50} />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
