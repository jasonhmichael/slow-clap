import * as React from 'react';
import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import LockIcon from '@material-ui/icons/Lock';
import Divider from '@material-ui/core/Divider';
import MyStateContext from '../../app.state';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

export const TeamSelectComponent = props => {
  const { classes } = props;
  const { currentUser, gameData, setGameData } = useContext(MyStateContext);

  let componentState = {
    gameData: JSON.parse(JSON.stringify(gameData))
  };

  return (
    <div>
      {componentState.gameData.map(g => {
        return (
          <div>
            {g.items.map(i => {
              if (i.userId) {
                return <Button variant="outlined" disabled className={classes.button}>
                    <LockIcon className={classes.leftIcon} />
                    {i.name} Owner {i.userId}
                  </Button>
              } else {
                return <Button variant="outlined" className={classes.button} onClick={() => {
                      i.userId = currentUser.userId;
                      console.log('setting game data to ' + JSON.stringify(componentState.gameData));
                      setGameData(componentState.gameData);
                    }}>
                    <AddIcon className={classes.leftIcon} />
                    Group {g.id} Item
                  </Button>
              }
            })}
            <Divider />
          </div>
        )
      })}
    </div>
  );
};

export const TeamSelect = withStyles(styles, { withTheme: true })(TeamSelectComponent);
