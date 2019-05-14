import * as React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import '../../app.scss';

const SetupLink = props => <Link to="/setup-challenge" {...props} />;

export class Intro extends React.Component {
  render() {
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
          <img src="../assets/MSP.png" />
        </Grid>
        <Grid item xs={12}>
          <h1>30 Day Challenge</h1>
        </Grid>
        <Grid item xs={12}>
          <p>
            Now that you have a budget, why not put it to the test? We can help you stick to it for 30 days, which is
            enough time to build better spending habits.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            We can automatically track and categorize your spending, which is the easiest and most effective way to stay
            on budget.
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>We'll send you reminders to help keep your eyes on the prize!</p>
        </Grid>
        <Grid item xs={12}>
          <Button className="cta-button" component={SetupLink}>
            Let's do it
          </Button>
        </Grid>
      </Grid>
    );
  }
}
