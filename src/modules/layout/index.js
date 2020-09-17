import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import theme from '../../theme';
import Notification from '@components/Notification';
import NotificationProvider from '@providers/NotificationProvider';

const Layout = ({ children }) => (
  <NotificationProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Notification />
      <div id="content">{children}</div>
    </ThemeProvider>
  </NotificationProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
