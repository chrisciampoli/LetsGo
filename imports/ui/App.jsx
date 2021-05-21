import React, { useState } from 'react';
import _ from 'lodash';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Login } from './components/Login';
import { AppHeader } from "./components/AppHeader";
import { Results } from "./components/Results";
import { Nav } from "./components/Navigation";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export const App = () => {
    const classes = useStyles();
    const { user } = useTracker(() => {

    return ({ user: Meteor.user()});
  });

  if (!user) {
    return (
      <div className="foodsup-login-react">
        <Login/>
      </div>
    );
  }

  return (
      <Container maxWidth="lg">
          <Nav>
          <React.Fragment>
              <CssBaseline />
                  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                      <AppHeader>
                          <div className={classes.root}>
                              <Paper elevation={0} />
                              <Paper>
                                  <Results />
                              </Paper>
                              <Paper elevation={3} />
                          </div>
                      </AppHeader>
                  </Typography>
          </React.Fragment>
          </Nav>
      </Container>

  );
};
