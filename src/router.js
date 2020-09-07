import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';

const CustomRoute = ({ routes, route, Layout }) => {
  const RouteComponent = route.auth ? PrivateRoute : Route;

  return (
    <RouteComponent
      path={route.path}
      exact={!!route.exact}
      render={({ ...props }) => (
        <Suspense fallback="loading...">
          <Layout {...props} routes={routes}>
            <route.component {...props} routes={route.routes} />
          </Layout>
        </Suspense>
      )}
    />
  );
};

const RouterConfig = ({ routes, layout: Layout }) => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <CustomRoute key={`key-${i + 1}`} routes={routes} route={route} Layout={Layout} />
      ))}
    </Switch>
  </Router>
);

RouterConfig.propTypes = {
  layout: PropTypes.any.isRequired,
  routes: PropTypes.array.isRequired,
};

export default RouterConfig;
