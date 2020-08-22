import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import HorizontalMenu from './horizontal-menu';
import VerticalMenu from './vertical-menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Header = ({ routes }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenDrawer = () => {
    setMobileOpen(true);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <nav>
      <AppBar position="sticky" className={classes.appBar} variant="outlined">
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
          <HorizontalMenu routes={routes} />
        </Toolbar>
      </AppBar>

      <VerticalMenu
        handleClose={handleCloseDrawer}
        open={mobileOpen}
        routes={routes}
      />
    </nav>
  );
};

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
