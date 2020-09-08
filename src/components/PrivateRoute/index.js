import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@services/authentication';

const PrivateRoute = ({ render: Component, redirectPath, ...otherProps }) => (
  <Route
    {...otherProps}
    render={({ ...props }) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: redirectPath, state: { from: props.location } }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string,
  render: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  redirectPath: '/',
};

export default PrivateRoute;
