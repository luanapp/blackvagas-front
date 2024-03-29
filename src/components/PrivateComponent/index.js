import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { useAuthentication } from '@hooks';

const PrivateComponent = ({ Component, auth, ...props }) => {
  const { isAuthenticated } = useAuthentication();

  return !auth || (auth && isAuthenticated) ? (
    <Component {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  );
};

PrivateComponent.propTypes = {
  auth: PropTypes.bool.isRequired,
  Component: PropTypes.func.isRequired,
};

export default PrivateComponent;
