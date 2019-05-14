import * as React from 'react';
import MyStateContext from '../../app.state';
import { useContext } from 'react';

import './want-amount-entry.scss';
import { Grid } from '@material-ui/core';
export const WantAmountEntry = props => {
  const { targetSpendAmount, setTargetSpendAmount, selectedView } = useContext(MyStateContext);

  const disabled = props.disabled ? true : false;
  let targetSpendAmountDisplay = 0;
  switch (selectedView) {
    case 'day':
      targetSpendAmountDisplay = targetSpendAmount / 30;
      break;
    case 'week':
      targetSpendAmountDisplay = targetSpendAmount / 4;
      break;
    case 'month':
      targetSpendAmountDisplay = targetSpendAmount;
      break;
  }

  return (
    <Grid container={true} className="amount-input">
      <Grid item xs={12}>
        <Grid container={true} alignItems="flex-start" justify="center">
          <span className="dollar-sign">$</span>
          <input
            id="target-spend-amount"
            type="number"
            value={targetSpendAmountDisplay}
            onChange={event => setTargetSpendAmount(event.currentTarget.value)}
            className="want-amount-entry"
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
