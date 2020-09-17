import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
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

MenuButton.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuButton;
