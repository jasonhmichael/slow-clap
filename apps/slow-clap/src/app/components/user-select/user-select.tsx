import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MyStateContext from '../../app.state';
import { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

export const UserSelectComponent = props => {
  const { classes } = props;
  const { currentUser, setCurrentUser } = useContext(MyStateContext);

  let componentState = {
    userId: currentUser.userId,
    userName: currentUser.userName
  };

  let handleChange = event => {
    const newVal = event.target.value;
    componentState.userId = newVal;
    componentState.userName = newVal;
  };
  
  return (
    <div>
      <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          defaultValue={currentUser.userName}
          onChange={handleChange}
          margin="normal"
        />
      <Button variant="outlined" className={classes.button} onClick={() => {
          console.log(`setting current user to ${componentState}`);
          setCurrentUser(componentState);
        }}>
        Record User Name
      </Button>
    </div>
  );
};

export const UserSelect = withStyles(styles, { withTheme: true })(UserSelectComponent);
