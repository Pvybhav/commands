/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { Star, ChromeReaderMode } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import GitIcon from '../assets/images/git.png';
import NpmIcon from '../assets/images/npm.png';
import WindowsIcon from '../assets/images/windows.png';
import LinuxIcon from '../assets/images/linux.png';
import DockerIcon from '../assets/images/docker.png';
import DefaultIcon from '../assets/images/command.png';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 15,
    maxWidth: 345,
    height: 370,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginTop: 10,
      marginBottom: 10,
    },
    [theme.breakpoints.down('md')]: {
      margin: 10,
    },
  },
  media: {
    height: 100,
    width: '50',
    textAlign: 'center',
  },
  active: { background: 'papayawhip' },
}));

const CategoryCard = ({
  title,
  description,
  iconPath,
  documentationUrl,
  filterText,
}) => {
  const classes = useStyles();
  const categoryTitle = title.toLowerCase();

  const imageSrc =
    categoryTitle === 'git'
      ? GitIcon
      : categoryTitle === 'npm'
      ? NpmIcon
      : categoryTitle === 'windows'
      ? WindowsIcon
      : categoryTitle === 'linux'
      ? LinuxIcon
      : categoryTitle === 'docker'
      ? DockerIcon
      : DefaultIcon;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title="Contemplative Reptile"
          style={{ width: '50%', height: '90px', margin: 'auto' }}
        />
        <NavLink
          to={`/category/${title.toLowerCase()}`}
          style={{ textDecoration: 'none' }}
        >
          <CardContent className={'hello'}>
            <Typography gutterBottom variant="h5" component="h2">
              <Highlighter
                highlightClassName={classes.filteredText}
                searchWords={[...filterText.split(' ')]}
                autoEscape={true}
                textToHighlight={title}
              />
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ height: '150px' }}
            >
              {description}
            </Typography>
          </CardContent>
        </NavLink>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Star style={{ fill: 'yellow' }} />
        </Button>
        <Button size="small" color="primary">
          <a href={documentationUrl} target="_blank" rel="noopener">
            <ChromeReaderMode />
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CategoryCard;
