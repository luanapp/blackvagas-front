import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Footer from '../../components/footer';
import theme from '../../theme';

const Layout = ({ children, routes }) => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header routes={routes} />
      {children}
      <Footer />
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
