import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Nav from './components/Navigation/Nav'
import { LoginForm } from './components/Login/LoginForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppHeader from "./components/AppHeader/AppHeader";
import Feed from "./pages/Feed";
import Account from './pages/Account';
import MyMeals from './pages/MyMeals';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: 1,
            height: theme.spacing(16),
        },
    },
}));

export const App = () => {
  const classes = useStyles();
  const { user } = useTracker(() => {
    return ({
        user: Meteor.user()
    });
  });



  if (!user) {
    return (
      <div className="foodsup-login-react">
        <LoginForm/>
      </div>
    );
  }

  return (
      <Router>
          <AppHeader/>
              <Container className={classes.cardGrid} maxWidth="xl">
                  <CssBaseline />
                  <main>
                      <AppBar><Nav /></AppBar>
                      <Switch>
                          <Route exact path="/">
                              <Feed />
                          </Route>
                          <Route path="/myMeals">
                              <MyMeals />
                          </Route>
                          <Route path="/account">
                              <Account />
                          </Route>
                      </Switch>
                  </main>
              </Container>
      </Router>
  );
};
