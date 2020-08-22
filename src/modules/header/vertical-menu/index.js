import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'ramda';
import {
  IconButton,
  Button,
  ButtonGroup,
  Hidden,
  Drawer,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useTranslation } from 'react-i18next';
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
  drawerPaper: {
    width: '100%',
    backgroundColor: fade(theme.palette.primary.main, '0.8'),
    color: fade(theme.palette.secondary.main, '0.8'),
    '& button': {
      color: theme.palette.secondary.main,
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
  selectedButton: {
    color: theme.palette.background.default,
  },
}));

const VerticalMenu = ({ routes, handleClose, open }) => {
  const { t } = useTranslation(['routes']);
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();

  const buttonColor = (path) => {
    return location.pathname === path ? classes.selectedButton : null;
  };
  const isVisible = (route) => !!route.visible;
  const visibleRoutes = filter(isVisible, routes);

  const drawerContent = (
    <div>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        className={classes.grid}
        aria-label="vertical outlined primary button group"
      >
        {visibleRoutes.map(({ path, label, order }) => (
          <Button
            to={path}
            key={order}
            component={NavLink}
            classes={{ label: buttonColor(path) }}
          >
            {t(label)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );

  return (
    <nav>
      <Hidden smUp implementation="css">
        <Drawer
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          variant="temporary"
          open={open}
          onClose={handleClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <IconButton onClick={handleClose} className={classes.closeMenuButton}>
            <CloseIcon />
          </IconButton>
          <Button color="inherit" to="/" component={NavLink}>
            <Typography variant="h5">BlackVagas</Typography>
          </Button>
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );
};

VerticalMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string,
      order: PropTypes.number.isRequired,
    })
  ).isRequired,
};

VerticalMenu.defaultProps = {
  open: false,
};

export default VerticalMenu;
