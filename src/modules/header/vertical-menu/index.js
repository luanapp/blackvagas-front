import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'ramda';
import { IconButton, Button, ButtonGroup, Hidden, Drawer, Typography, ThemeProvider } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { NavLink } from 'react-router-dom';
import MenuButton from '../menu-button';
import secondatyTheme from '../../landing/theme';

const useStyles = makeStyles(theme => ({
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

const isVisible = route => !!route.visible;
const renderVisibleRoutes = routes => {
  const visibleRoutes = filter(isVisible, routes);
  return visibleRoutes.map(({ id, ...props }) => <MenuButton key={id.toString()} {...props} />);
};

const VerticalMenu = ({ routes, handleClose, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const visibleRoutes = useMemo(() => renderVisibleRoutes(routes), [routes]);

  const drawerContent = (
    <div>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        className={classes.grid}
        aria-label="vertical outlined primary button group"
      >
        {visibleRoutes}
      </ButtonGroup>
    </div>
  );

  return (
    <ThemeProvider theme={secondatyTheme}>
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
    </ThemeProvider>
  );
};

VerticalMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

VerticalMenu.defaultProps = {
  open: false,
};

export default VerticalMenu;
