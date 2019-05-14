import * as React from 'react';
import { Grid } from '@material-ui/core';
import MyStateContext, { getTodaysDate } from '../../app.state';
import { CalendarDays } from './calendar-days';

export const getDateFormat = date => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export const Calendar = () => {
  const { startDate } = React.useContext(MyStateContext);
  const currentStartDate = new Date(startDate ? startDate : getTodaysDate());

  currentStartDate.setDate(currentStartDate.getDate() + 1); // timezonehack
  const month = currentStartDate.getMonth();
  let year = currentStartDate.getFullYear();
  let previousMonth = month;
  if (month === 0) {
    year = year - 1;
    previousMonth = 11;
  }

  // TODO: Im not sure if it works for when you switch ahead a year.
  const daysInPreviousMonth = getDaysInMonth(previousMonth, year);
  const daysInMonth = getDaysInMonth(month, year);

  const firstDay = daysInMonth[0].getDay();
  const lastDay = daysInMonth[daysInMonth.length - 1].getDay();
  const sundays = [];
  const mondays = [];
  const tuesdays = [];
  const wednesdays = [];
  const thursdays = [];
  const fridays = [];
  const saturdays = [];

  switch (firstDay) {
    case 1:
      sundays.push(daysInPreviousMonth[daysInPreviousMonth.length - 1].getDate());
      break;
    case 2:
      sundays.push(daysInPreviousMonth[daysInPreviousMonth.length - 2].getDate());
      mondays.push(daysInPreviousMonth[daysInPreviousMonth.length - 1].getDate());
      break;
    case 3:
      sundays.push(daysInPreviousMonth[daysInPreviousMonth.length - 3].getDate());
      mondays.push(daysInPreviousMonth[daysInPreviousMonth.length - 2].getDate());
      tuesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 1].getDate());
      break;
    case 4:
      sundays.push(daysInPreviousMonth[daysInPreviousMonth.length - 4].getDate());
      mondays.push(daysInPreviousMonth[daysInPreviousMonth.length - 3].getDate());
      tuesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 2].getDate());
      wednesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 1].getDate());
      break;
    case 5:
      sundays.push(daysInPreviousMonth[daysInPreviousMonth.length - 5].getDate());
      mondays.push(daysInPreviousMonth[daysInPreviousMonth.length - 4].getDate());
      tuesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 3].getDate());
      wednesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 2].getDate());
      thursdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 1].getDate());
      break;
    case 6:
      sundays.push(daysInPreviousMonth[daysInPreviousMonth.length - 6].getDate());
      mondays.push(daysInPreviousMonth[daysInPreviousMonth.length - 5].getDate());
      tuesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 4].getDate());
      wednesdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 3].getDate());
      thursdays.push(daysInPreviousMonth[daysInPreviousMonth.length - 2].getDate());
      fridays.push(daysInPreviousMonth[daysInPreviousMonth.length - 1].getDate());
      break;
    default:
      break;
  }

  daysInMonth.forEach(day => {
    switch (day.getDay()) {
      case 0:
        sundays.push(day.getDate());
        break;
      case 1:
        mondays.push(day.getDate());
        break;
      case 2:
        tuesdays.push(day.getDate());
        break;
      case 3:
        wednesdays.push(day.getDate());
        break;
      case 4:
        thursdays.push(day.getDate());
        break;
      case 5:
        fridays.push(day.getDate());
        break;
      case 6:
        saturdays.push(day.getDate());
        break;
    }
  });

  switch (lastDay) {
    case 5:
      saturdays.push(1);
      break;
    case 4:
      fridays.push(1);
      saturdays.push(2);
      break;
    case 3:
      thursdays.push(1);
      fridays.push(2);
      saturdays.push(3);
      break;
    case 2:
      wednesdays.push(1);
      thursdays.push(2);
      fridays.push(3);
      saturdays.push(4);
      break;
    case 1:
      tuesdays.push(1);
      wednesdays.push(2);
      thursdays.push(3);
      fridays.push(4);
      saturdays.push(5);
      break;
    case 0:
      mondays.push(1);
      tuesdays.push(2);
      wednesdays.push(3);
      thursdays.push(4);
      fridays.push(5);
      saturdays.push(6);
      break;
    default:
      break;
  }

  return (
    <Grid container direction="row" spacing={32} justify="center">
      <CalendarDays dayArray={sundays} dayFirstLetter="S" />
      <CalendarDays dayArray={mondays} dayFirstLetter="M" />
      <CalendarDays dayArray={tuesdays} dayFirstLetter="T" />
      <CalendarDays dayArray={wednesdays} dayFirstLetter="W" />
      <CalendarDays dayArray={thursdays} dayFirstLetter="T" />
      <CalendarDays dayArray={fridays} dayFirstLetter="F" />
      <CalendarDays dayArray={saturdays} dayFirstLetter="S" />
    </Grid>
  );
};
