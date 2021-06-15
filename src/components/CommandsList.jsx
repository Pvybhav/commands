import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { v4 as uuid } from 'uuid';
import UseCommands from '../hooks/UseCommands';
const CommandRow = React.lazy(() => import('./CommandRow'));
const CommandPagination = React.lazy(() => import('./CommandPagination'));
const NoResults = React.lazy(() => import('./common/NoResults'));

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
  sort,
}) {
  const classes = useStyles();
  const commands = UseCommands(category);
  const [noOfCommandsPerPage] = React.useState(7);
  const handleChange = (event, value) => {
    setPage(value);
  };
  React.useEffect(() => {
    setPage(1);
  }, [setPage]);

  let filteredCommands = filterText
    ? [...commands].filter(({ text }) =>
        text.toLowerCase().includes(filterText.toLowerCase()),
      )
    : [...commands];

  if (sort !== null) {
    if (sort) {
      filteredCommands = filteredCommands.sort((a, b) =>
        a.text.toLowerCase() < b.text.toLowerCase() ? -1 : 0,
      );
    } else {
      filteredCommands = filteredCommands.sort((a, b) =>
        b.text.toLowerCase() < a.text.toLowerCase() ? -1 : 0,
      );
    }
  }

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
      {currentPageCommands.length > 0 ? (
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
      ) : (
        <NoResults
          alertHeader={'Sorry, no results found!'}
          alertMessage={
            'Please check the spelling or try searching for something else'
          }
        />
      )}
    </>
  );
}
