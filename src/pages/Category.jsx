import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const CategoryNavbar = React.lazy(() => import('../components/CategoryNavbar'));

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
