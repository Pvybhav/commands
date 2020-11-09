import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import handleCopyCommand from '../helpers/copy-command';
const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
  },
  command: {
    color: '#52c4ff',
  },
  avatar: {
    cursor: 'pointer',
  },
  unSelectable: {
    userSelect: 'none',
  },
}));

const CommandRow = ({ command: { text, description }, isLastItem }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start">
        <Tooltip
          title="Copy command to clipboard"
          TransitionComponent={Zoom}
          placement="top"
          arrow
        >
          <ListItemAvatar
            onClick={() => handleCopyCommand(text)}
            className={classes.avatar}
          >
            <Avatar alt="Copy" src={'dummy.jpg'}>
              <i className="fas fa-clipboard"></i>
            </Avatar>
          </ListItemAvatar>
        </Tooltip>
        <ListItemText
          primary={
            <b className={`${classes.command} ${classes.unSelectable}`}>
              {text}
            </b>
          }
          secondary={
            <span className={classes.unSelectable}>{description} </span>
          }
        />
      </ListItem>
      {!isLastItem && <Divider variant="inset" component="li" />}
    </>
  );
};

CommandRow.propTypes = {
  command: PropTypes.shape({
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isLastItem: PropTypes.bool.isRequired,
};

export default CommandRow;
