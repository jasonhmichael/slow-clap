import { Grid } from '@material-ui/core';
import { Calendar } from '.';
import * as React from 'react';
import { useContext } from 'react';
import MyStateContext from '../../app.state';

export const getDateFormat = date => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

export const nextMonth = (startDate, setStartDateFn) => {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 1); // timezone hack..
  result.setMonth(result.getMonth() + 1);

  setStartDateFn(getDateFormat(result));
};

export const previousMonth = (startDate, setStartDateFn) => {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 1); // timezone hack..
  result.setMonth(result.getMonth() - 1);

  setStartDateFn(getDateFormat(result));
};

export const CalendarContainer = () => {
  const { startDate, setStartDate } = useContext(MyStateContext);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const startDateObj = new Date(startDate);
  const monthTitle = `${monthNames[startDateObj.getMonth()]}  ${startDateObj.getFullYear()}`;

  return (
    <Grid item xs={12}>
      <Grid>
        <Grid item xs={12} className="calendar-top">
          <Grid container direction="row">
            <Grid item xs={1} onClick={() => previousMonth(startDate, setStartDate)}>
              <i className="material-icons">arrow_left</i>
            </Grid>
            <Grid item xs={10}>
              {monthTitle}
            </Grid>
            <Grid item xs={1} onClick={() => nextMonth(startDate, setStartDate)}>
              <i className="material-icons">arrow_right</i>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Calendar />
        </Grid>
        <Grid item xs={12}>
          <div className="calendar-bottom" />
        </Grid>
      </Grid>
    </Grid>
  );
};
