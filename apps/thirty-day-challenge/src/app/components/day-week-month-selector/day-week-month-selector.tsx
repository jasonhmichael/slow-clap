import * as React from 'react';
import { useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import './day-week-month-styles.scss';
import MyStateContext from '../../app.state';

const day = 'day';
const week = 'week';
const month = 'month';

export function getClassName(selected, buttonId) {
  let result = '';
  switch (buttonId) {
    case day:
      result = 'left-button';
      break;
    case week:
      result = 'middle-button';
      break;
    case month:
      result = 'right-button';
      break;
  }

  return selected === buttonId ? `selected-button ${result}` : `unselected-button ${result}`;
}

export const DayWeekMonthSelector = props => {
  const { selectedView, setSelectedView } = useContext(MyStateContext);

  return (
    <Grid container={true} justify="center" style={{ padding: '20px' }}>
      <button className={getClassName(selectedView, day)} onClick={() => setSelectedView(day)}>
        Day
      </button>
      <button className={getClassName(selectedView, week)} onClick={() => setSelectedView(week)}>
        Week
      </button>
      <button className={getClassName(selectedView, month)} onClick={() => setSelectedView(month)}>
        Month
      </button>
    </Grid>
  );
};
