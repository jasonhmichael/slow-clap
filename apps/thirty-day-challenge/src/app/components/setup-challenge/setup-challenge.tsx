import * as React from 'react';
import { Button, Grid } from '@material-ui/core';
import { WantAmountEntry } from '../want-amount-entry/want-amount-entry';
import { SetupChallengeDate } from '../setup-challenge-date/setup-challenge-date';
import { DayWeekMonthSelector } from '../day-week-month-selector/day-week-month-selector';

import MyStateContext from '../../app.state';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './setup-challenge.scss';

const DashboardLink = props => <Link to="/dashboard" {...props} />;
export const SetupChallenge = () => {
  const { targetSpendAmount, startDate } = useContext(MyStateContext);
  return (
    <Grid container={true}>
      <Grid item xs={12}>
        <div className="container">FOR MY WANTS</div>
      </Grid>
      <Grid item xs={12}>
        <WantAmountEntry />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid item xs={12}>
          <DayWeekMonthSelector />
        </Grid>
        <Grid item xs={12}>
          <SetupChallengeDate />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: '25px' }}>
          <Button className="cta-button" component={DashboardLink}>
            Continue
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
