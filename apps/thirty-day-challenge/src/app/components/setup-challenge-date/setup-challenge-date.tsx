import * as React from 'react';
import MyStateContext from '../../app.state';
import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import './setup-challenge-date.scss';
import { CalendarContainer } from '../calendar/calendar-container';

export const getDateFormat = date => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

export const getCompletedDate = startDate => {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);

  return getDateFormat(result);
};

export const SetupChallengeDate = () => {
  const { startDate } = useContext(MyStateContext);

  return (
    <Grid container={true} direction="column" spacing={8}>
      <Grid item xs={12}>
        <div className="rounded">CHOOSE YOUR START DATE</div>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: '15px', paddingBottom: '20px' }}>
        <span className="date-labels" style={{ marginBottom: '15px' }}>
          Start: {startDate}{' '}
        </span>{' '}
        <br />
        <span className="date-labels">Complete: {getCompletedDate(startDate)}</span>
      </Grid>
      <CalendarContainer />
    </Grid>
  );
};
