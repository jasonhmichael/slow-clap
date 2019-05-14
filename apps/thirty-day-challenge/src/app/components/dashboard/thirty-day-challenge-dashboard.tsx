import { Divider, Grid } from '@material-ui/core';
import * as React from 'react';
import { ThirtyDayChallengeChallengeDetails } from '../challenge-details';
import { DayWeekMonthSelector } from '../day-week-month-selector';
import { ThirtyDayChallengeSpendProgressBar } from '../spend-progress-bar';
import { WantAmountEntry } from '../want-amount-entry/want-amount-entry';
import { ThirtyDayChallengeWantsSpendingGraph } from '../wants-spending-graph';

import './thirty-day-challenge-dashboard.scss';

export const ThirtyDayChallengeDashboard = props => {
  return (
    <Grid container={true}>
      <Grid item xs={12}>
        <WantAmountEntry disabled={true} />
      </Grid>
      <Grid item xs={12}>
        <DayWeekMonthSelector />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <ThirtyDayChallengeSpendProgressBar />
      </Grid>
      <Grid item xs={12}>
        <ThirtyDayChallengeWantsSpendingGraph />
      </Grid>
      <Grid item xs={12}>
        <ThirtyDayChallengeChallengeDetails />
      </Grid>
    </Grid>
  );
};
