import React, { useState } from 'react';
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
import Feed from "./components/Feed/Feed";

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

// const toggleChecked = ({ _id, isChecked }) => {
//   Meteor.call('tasks.setChecked', _id, !isChecked);
// };
//
// const togglePrivate = ({ _id, isPrivate }) => {
//   Meteor.call('tasks.setPrivate', _id, !isPrivate);
// };

// const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

export const App = () => {
  // const filter = {};
  const classes = useStyles();

  // const [hideCompleted, setHideCompleted] = useState(false);

  // if (hideCompleted) {
  //   _.set(filter, 'checked', false);
  // }

  const {  user } = useTracker(() => {
    // Meteor.subscribe('tasks');
    // tasks, incompleteTasksCount,
    return ({
      // tasks: Tasks.find(filter, {sort: {createdAt: -1}}).fetch(),
      // incompleteTasksCount: Tasks.find({checked: {$ne: true}}).count(),
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
      <Container name="AppContainer" maxWidth="xl">
          <AppHeader/>
          <React.Fragment>
              <CssBaseline />
                  <Typography width={1} component="div" style={{ backgroundColor: '#cfe8fc'}}>
                      <Nav>
                          <div id="navnav" className={classes.root}>
                              <Paper elevation={0} />
                              <Paper>
                                  <Feed />
                              </Paper>
                              <Paper elevation={3} />
                          </div>
                      </Nav>
                  </Typography>
          </React.Fragment>
          <Feed />
      </Container>

  );
};
