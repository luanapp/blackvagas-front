import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';

const RouterConfig = ({ routes, layout: Layout }) => (
  <Router>
    <Switch>
      {routes.map(route =>
        route.auth ? (
          <PrivateRoute
            key={route.id}
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
        ) : (
          <Route
            key={route.id}
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
        )
      )}
    </Switch>
  </Router>
);

RouterConfig.propTypes = {
  layout: PropTypes.any.isRequired,
  routes: PropTypes.array.isRequired,
};

export default RouterConfig;