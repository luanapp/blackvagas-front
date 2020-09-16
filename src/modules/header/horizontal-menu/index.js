import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'ramda';
import { Button, ButtonGroup, Hidden, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useLocation, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
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

const MenuButton = ({ path, label }) => {
  const classes = useStyles();
  const [t] = useTranslation(['routes']);
  const location = useLocation();
  const buttonColor = useMemo(() => (location.pathname === path ? classes.selectedButton : null), [
    location,
    classes,
    path,
  ]);

  return (
    <Button
      to={path}
      component={NavLink}
      color="secondary"
      classes={{
        root: classes.vButton,
        label: buttonColor,
      }}
    >
      {t(label)}
    </Button>
  );
};
const isVisible = route => !!route.visible;
const renderVisibleRoutes = routes => {
  const visibleRoutes = filter(isVisible, routes);
  return visibleRoutes.map(({ id, ...props }) => <MenuButton key={id.toString()} {...props} />);
};

const HorizontalMenu = ({ routes }) => {
  const classes = useStyles();
  const visibleRoutes = useMemo(() => renderVisibleRoutes(routes), [routes]);

  return (
    <Hidden xsDown>
      <Button color="inherit" to="/" component={NavLink}>
        <Typography color="inherit" variant="h5">
          BlackVagas
        </Typography>
      </Button>
      <ButtonGroup variant="text" className={classes.grid} aria-label="text button group">
        {visibleRoutes}
      </ButtonGroup>
    </Hidden>
  );
};

HorizontalMenu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default HorizontalMenu;
