import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import CategoryNavbar from '../components/CategoryNavbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Category = ({
  match: {
    params: { category },
  },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CategoryNavbar category={category} />
    </div>
  );
};

export default Category;
