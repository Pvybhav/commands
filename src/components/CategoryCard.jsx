/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Star, ChromeReaderMode } from '@material-ui/icons';
import GitIcon from '../assets/images/git.png';
import NpmIcon from '../assets/images/npm.png';
import WindowsIcon from '../assets/images/windows.png';
import LinuxIcon from '../assets/images/linux.png';
import DockerIcon from '../assets/images/docker.png';
import DefaultIcon from '../assets/images/command.png';

const useStyles = makeStyles({
  root: {
    margin: 15,
    maxWidth: 345,
    height: 370,
    textAlign: 'center',
  },
  media: {
    height: 100,
    width: '50',
    textAlign: 'center',
  },
});

const CategoryCard = ({ title, description, iconPath, documentationUrl }) => {
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Star style={{ fill: 'yellow' }} />
        </Button>
        <Button size="small" color="primary">
          <a href={documentationUrl} target="_blank">
            <ChromeReaderMode />
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CategoryCard;
