import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ButtonGroup,
  Hidden,
  Drawer,
  Grid,
} from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grid: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
    [theme.breakpoints.down('xs')]: {
      '& button': {
        color: '#FFFFFF',
      },
    },
  },
  drawerPaper: {
    width: '100%',
    backgroundColor: fade(theme.palette.primary.main, '0.8'),
    color: 'rgba(256, 256, 256, 0.8)',
    '& button': {
      color: '#FFFFFF',
    },
    '& span': {
      justifyContent: 'left',
      marginLeft: 10,
    },
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

const Header = ({ routes }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenDrawer = () => {
    setMobileOpen(true);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  const drawerContent = (
    <div>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        className={classes.grid}
        aria-label="vertical outlined primary button group"
      >
        {routes.map(({ path, label }) => (
          <Button to={path} button key={label}>
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );

  const barContent = (
    <ButtonGroup
      variant="text"
      className={classes.grid}
      aria-label="text primary button group"
    >
      {routes.map(({ path, label }) => (
        <Button key={label} color="inherit" to={path} component={NavLink}>
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );

  return (
    <nav>
      <AppBar className={classes.appBar} variant="outlined">
        <Toolbar>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleOpenDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit" to="/" component={NavLink}>
              BlackVagas
            </Button>
            {barContent}
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden smUp implementation="css">
        <Drawer
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          variant="temporary"
          open={mobileOpen}
          onClose={handleCloseDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <IconButton
            onClick={handleCloseDrawer}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );
};

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
