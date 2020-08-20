import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'ramda';
import { Button, ButtonGroup, Hidden } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useLocation, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
  },
  vButton: {
    '&:hover': {
      color: theme.palette.background.default,
    },
  },
  selectedButton: {
    color: theme.palette.background.default,
  },
}));

const HorizontalMenu = ({ routes }) => {
  const classes = useStyles();
  const location = useLocation();

  const isVisible = (route) => !!route.visible;
  const visibleRoutes = filter(isVisible, routes);
  const buttonColor = (path) => {
    return location.pathname === path ? classes.selectedButton : null;
  };

  return (
    <Hidden xsDown>
      <Button color="inherit" to="/" component={NavLink}>
        BlackVagas
      </Button>
      <ButtonGroup
        variant="text"
        className={classes.grid}
        aria-label="text button group"
      >
        {visibleRoutes.map(({ path, label, order }) => (
          <Button
            key={order}
            to={path}
            component={NavLink}
            color="secondary"
            classes={{
              root: classes.vButton,
              label: buttonColor(path),
            }}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </Hidden>
  );
};

HorizontalMenu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string,
      order: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default HorizontalMenu;
