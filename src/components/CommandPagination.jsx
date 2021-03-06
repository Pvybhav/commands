import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      textAlign: 'center',
    },
  },
}));

export default function CommandPagination({
  handleChange,
  page,
  noOfPagesForPagination,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={noOfPagesForPagination}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
