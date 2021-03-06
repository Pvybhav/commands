import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Search as SearchIcon,
  SortByAlpha as SortIcon,
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Categories from '../assets/data/Categories.json';
const CommandsList = React.lazy(() => import('./CommandsList'));

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  homeButton: {
    // marginRight: 10,
    marginLeft: 10,
    color: 'honeydew',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  title: {
    textAlign: 'left',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      fontSize: '1rem',
      marginRight: 10,
    },
  },
  menuButton: {
    marginLeft: 36,
    marginRight: 36,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  activeItem: {
    color: 'green',
  },
  sidebarIcon: {
    width: '1.5em',
    fontSize: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
  },
}));

export default function CategoryNavbar({ category }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState(null);

  const toggleSort = () =>
    setSort(s => (s === null || s === false ? true : false));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeFilterText = e => {
    setPage(1);
    setFilterText(e.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleDrawerOpen}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            className={classes.title}
            style={{ flex: 1 }}
          >
            {category.toUpperCase()}
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={filterText}
              onChange={e => handleChangeFilterText(e)}
            />
          </div>
          <SortIcon
            style={{ margin: '0px 15px', cursor: 'pointer' }}
            onClick={() => toggleSort()}
          />
          <NavLink
            to="/categories"
            style={{ textDecoration: 'none' }}
            activeClassName={classes.activeItem}
          >
            <IconButton
              edge="start"
              className={classes.homeButton}
              color="inherit"
              aria-label="open drawer"
            >
              <HomeIcon />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Categories.map(({ name, fontAwesomeIconName }) => (
            <Fragment key={uuid()}>
              <NavLink
                to={`/category/${name.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
              >
                <ListItem button key={name}>
                  <ListItemIcon>
                    <i
                      className={`${fontAwesomeIconName} ${classes.sidebarIcon}`}
                    ></i>
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </NavLink>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar}></div>
        <CommandsList
          category={category}
          filterText={filterText}
          page={page}
          setPage={setPage}
          sort={sort}
        />
      </main>
    </div>
  );
}
