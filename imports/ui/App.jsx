import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Task } from './Task';
import { Tasks } from '/imports/api/tasks';
import { TaskForm } from './TaskForm';
import Nav from './components/Navigation/Nav'
import { LoginForm } from './LoginForm';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(650),
        },
    },
}));

const toggleChecked = ({ _id, isChecked }) => {
  Meteor.call('tasks.setChecked', _id, !isChecked);
};

const togglePrivate = ({ _id, isPrivate }) => {
  Meteor.call('tasks.setPrivate', _id, !isPrivate);
};

const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

export const App = () => {
  const filter = {};
  const classes = useStyles();

  const [hideCompleted, setHideCompleted] = useState(false);

  if (hideCompleted) {
    _.set(filter, 'checked', false);
  }

  const { tasks, incompleteTasksCount, user } = useTracker(() => {
    Meteor.subscribe('tasks');

    return ({
      tasks: Tasks.find(filter, {sort: {createdAt: -1}}).fetch(),
      incompleteTasksCount: Tasks.find({checked: {$ne: true}}).count(),
      user: Meteor.user(),
    });
  });

  // if (!user) {
  //   return (
  //     <div className="simple-todos-react">
  //       <LoginForm/>
  //     </div>
  //   );
  // }

  return (
      <Nav>
          <div className={classes.root}>
              <Paper elevation={0} />
              <Paper />
              <Paper elevation={3} />
          </div>
      </Nav>
  );
};
