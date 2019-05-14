import { Dashboard } from './components/dashboard';
import { Intro } from './components/intro';
import * as React from 'react';
import { useEffect, useState } from 'react';
import MyStateContext, { ApplicationState, retrieveState, recordState } from './app.state';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import './app.scss';
import { Grid } from '@material-ui/core';

const RedirectToIntro = props => <Redirect to="/intro" {...props} />;

const NoMatch = ({ location }) => {
  return (
    <div>
      <h3>
        Page not found for route <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export const App = () => {
  const applicationState: ApplicationState = retrieveState(useState);

  useEffect(() => {
    // Update the document title using the browser API
    recordState(applicationState);
  }, [applicationState]);

  return (
    <Router>
      <MyStateContext.Provider value={applicationState}>
        <Grid container={true}>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/" component={RedirectToIntro} />
              <Route path="/intro" component={Intro} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </Grid>
        </Grid>
      </MyStateContext.Provider>
    </Router>
  );
};
