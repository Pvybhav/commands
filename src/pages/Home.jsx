import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import CategoryCard from '../components/CategoryCard';
import Navbar from '../components/Navbar';
import Categories from '../assets/data/Categories.json';

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

export default function Home() {
  const classes = useStyles();

  function CategoriesList() {
    return (
      <Grid container item xs={12} spacing={3} style={{ margin: '20px' }}>
        {Categories.map(({ name, description, iconPath, documentationUrl }) => (
          <Grid key={uuid()} item xs={4} direction="row">
            <CategoryCard
              title={name}
              description={description}
              iconPath={iconPath}
              documentationUrl={documentationUrl}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Navbar />
      <Container fixed>
        <Grid container spacing={4}>
          <CategoriesList />
        </Grid>
      </Container>
    </div>
  );
}
