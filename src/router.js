import React, { Suspense, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';

const renderRoute = ({ Component, Layout, routes, route }) => (
  <Component
    key={route.id.toString()}
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

const RouterConfig = ({ routes, layout: Layout }) => {
  const renderPrivateRoute = useCallback(route => renderRoute({ Component: PrivateRoute, Layout, routes, route }), [
    routes,
    Layout,
  ]);
  const renderRegularRoute = useCallback(route => renderRoute({ Component: Route, Layout, routes, route }), [
    routes,
    Layout,
  ]);

  const allRoutes = useMemo(
    () => routes.map(route => (route.auth ? renderPrivateRoute(route) : renderRegularRoute(route))),
    [routes, renderPrivateRoute, renderRegularRoute]
  );

  return (
    <Router>
      <Switch>{allRoutes}</Switch>
    </Router>
  );
};

RouterConfig.propTypes = {
  layout: PropTypes.any.isRequired,
  routes: PropTypes.array.isRequired,
};

export default RouterConfig;
