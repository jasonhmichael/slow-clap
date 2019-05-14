import { Divider, Grid } from '@material-ui/core';
import * as React from 'react';
import { NavBar } from '../nav-bar';
import { UserSelect } from '../user-select';
import { Team } from '../team';
import { TeamSelect } from '../team-select';

import './dashboard.scss';

export const Dashboard = props => {
  return (
    <Grid container={true}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <UserSelect />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Team />
      </Grid>
      <Grid item xs={12}>
        <TeamSelect />
      </Grid>
    </Grid>
  );
};
