import { Grid } from '@material-ui/core';

import * as React from 'react';
import MyStateContext from '../../app.state';

export const getDateFormat = date => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

const selectDate = (date, setStartDateFn, currentStartDate, validDate = true) => {
  if (validDate) {
    const selectedDate = new Date(currentStartDate);
    selectedDate.setDate(selectedDate.getDate() + 1); // timezone hack
    setStartDateFn(getDateFormat(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date)));
  }
};

export const CalendarDays = props => {
  const { startDate, setStartDate } = React.useContext(MyStateContext);
  const startDateDay = Number(startDate.slice(8, startDate.length));

  return (
    <Grid item>
      <div className="calendar-item">{props.dayFirstLetter}</div>
      <br />
      <div
        className={
          props.dayArray[0] > 6
            ? 'calendar-disabled'
            : startDateDay === props.dayArray[0]
            ? 'calendar-item selected-start-date'
            : 'calendar-item'
        }
        onClick={() => selectDate(props.dayArray[0], setStartDate, startDate, props.dayArray[0] < 6)}
      >
        {props.dayArray[0]}
      </div>
      <br />
      <div
        className={startDateDay === props.dayArray[1] ? 'calendar-item selected-start-date' : 'calendar-item'}
        onClick={() => selectDate(props.dayArray[1], setStartDate, startDate)}
      >
        {props.dayArray[1]}
      </div>
      <br />
      <div
        className={startDateDay === props.dayArray[2] ? 'calendar-item selected-start-date' : 'calendar-item'}
        onClick={() => selectDate(props.dayArray[2], setStartDate, startDate)}
      >
        {props.dayArray[2]}
      </div>
      <br />
      <div
        className={startDateDay === props.dayArray[3] ? 'calendar-item selected-start-date' : 'calendar-item'}
        onClick={() => selectDate(props.dayArray[3], setStartDate, startDate)}
      >
        {props.dayArray[3]}
      </div>
      <br />
      <div
        className={
          props.dayArray[4] < 7
            ? 'calendar-disabled'
            : startDateDay === props.dayArray[4]
            ? 'calendar-item selected-start-date'
            : 'calendar-item'
        }
        onClick={() => selectDate(props.dayArray[4], setStartDate, startDate, props.dayArray[4] > 7)}
      >
        {props.dayArray[4]}
      </div>
      {props.dayArray[5] !== undefined ? <br /> : ''}
      {props.dayArray[5] !== undefined ? (
        <div
          className={
            props.dayArray[5] < 7
              ? 'calendar-disabled'
              : startDateDay === props.dayArray[5]
              ? 'calendar-item selected-start-date'
              : 'calendar-item'
          }
          onClick={() => selectDate(props.dayArray[5], setStartDate, startDate, props.dayArray[5] > 7)}
        >
          {props.dayArray[5]}
        </div>
      ) : (
        ''
      )}
    </Grid>
  );
};
