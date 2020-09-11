import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import theme from '../../theme';
import Notification from '@components/Notification';

const Layout = ({ children, routes }) => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header routes={routes} />
      <Notification />
      <div id="content">{children}</div>
      <Footer routes={routes} />
    </ThemeProvider>
  </React.StrictMode>
);

Layout.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
