import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { v4 as uuid } from 'uuid';
import CommandRow from './CommandRow';
import UseCommands from '../hooks/UseCommands';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: '90ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function CommandsList({ category = 'git' }) {
  const classes = useStyles();
  const commands = UseCommands(category);

  return (
    <List className={classes.root}>
      {commands.map((command, index) => (
        <CommandRow
          key={uuid()}
          command={command}
          isLastItem={Boolean(index === commands.length - 1)}
        />
      ))}
    </List>
  );
}
