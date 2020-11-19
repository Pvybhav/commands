import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { v4 as uuid } from 'uuid';
import UseCommands from '../hooks/UseCommands';
const CommandRow = React.lazy(() => import('./CommandRow'));
const CommandPagination = React.lazy(() => import('./CommandPagination'));

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: '90ch',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CommandsList({
  category = 'git',
  filterText,
  page,
  setPage,
}) {
  const classes = useStyles();
  const commands = UseCommands(category);
  const [noOfCommandsPerPage] = React.useState(7);
  const handleChange = (event, value) => {
    setPage(value);
  };
  React.useEffect(() => {
    setPage(1);
  }, [window.location.href]);

  const filteredCommands = [...commands].filter(({ text }) =>
    text.toLowerCase().includes(filterText.toLowerCase()),
  );
  const allCommandsLength = filteredCommands.length;

  const currentPageCommands = filteredCommands.splice(
    (page - 1) * noOfCommandsPerPage,
    noOfCommandsPerPage,
  );

  const noOfPagesForPagination =
    allCommandsLength % noOfCommandsPerPage === 0
      ? allCommandsLength === 0
        ? 1
        : parseInt(allCommandsLength / noOfCommandsPerPage)
      : parseInt(allCommandsLength / noOfCommandsPerPage) + 1;

  return (
    <>
      <List className={classes.root}>
        {currentPageCommands.map((command, index) => (
          <CommandRow
            key={uuid()}
            command={command}
            isLastItem={Boolean(index === currentPageCommands.length - 1)}
            filterText={filterText}
          />
        ))}
      </List>
      <CommandPagination
        handleChange={handleChange}
        page={page}
        noOfPagesForPagination={noOfPagesForPagination}
      />
    </>
  );
}
