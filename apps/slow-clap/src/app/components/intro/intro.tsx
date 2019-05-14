import * as React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import '../../app.scss';

const SetupLink = props => <Link to="/dashboard" {...props} />;

export const Intro = props => {
  return (
    <Grid
      container={true}
      alignItems="center"
      justify="center"
      direction="column"
      spacing={16}
      style={{ padding: '35px' }}
    >
      <Grid item xs={12}>
        <h1>Slow Clap</h1>
      </Grid>
      <Grid item xs={12}>
        <p>
          You like games?
        </p>
      </Grid>
      <Grid item xs={12}>
        <Button className="cta-button" component={SetupLink}>
          Let's do it
        </Button>
      </Grid>
    </Grid>
  );
};

