import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import CategoryCard from '../components/CategoryCard';
import Navbar from '../components/Navbar';
import Categories from '../assets/data/Categories.json';
const NoResults = React.lazy(() => import('../components/common/NoResults'));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      margin: 20,
    },
  },
  cardGrid: {
    padding: 0,
    margin: 0,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [filterText, setFilterText] = useState('');

  function CategoriesList({ filterText }) {
    const [categories, setCategories] = React.useState([]);
    const [categoriesAvailable, setCategoriesAvailable] = React.useState(true);

    React.useEffect(() => {
      const filteredCategories = Categories.filter(({ name }) =>
        name.toLowerCase().includes(filterText.toLowerCase()),
      );
      setCategories(filteredCategories);
      setCategoriesAvailable(filteredCategories.length > 0);
    }, [filterText]);

    return (
      <Grid
        container
        // item
        // xs={12}
        spacing={3}
        className={classes.grid}
        // justify="left"
      >
        {categoriesAvailable ? (
          categories.map(
            ({ name, description, iconPath, documentationUrl }) => (
              <Grid key={uuid()} direction="row" xs={12} sm={6} md={4} lg={3}>
                <CategoryCard
                  title={name}
                  description={description}
                  iconPath={iconPath}
                  documentationUrl={documentationUrl}
                  filterText={filterText}
                />
              </Grid>
            ),
          )
        ) : (
          <NoResults
            alertHeader={'Sorry, no results found!'}
            alertMessage={
              'Please check the spelling or try searching for something else'
            }
          />
        )}
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Navbar filterText={filterText} setFilterText={setFilterText} />
      <Container fixed>
        <Grid container className={classes.cardGrid}>
          <CategoriesList filterText={filterText} />
        </Grid>
      </Container>
    </div>
  );
}
