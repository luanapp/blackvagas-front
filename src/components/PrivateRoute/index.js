import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@services/authentication';

const PrivateRoute = ({ render: Component, ...otherProps }) => (
  <Route
    {...otherProps}
    render={({ ...props }) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
);

export default PrivateRoute;
