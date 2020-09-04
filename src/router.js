import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RouterConfig = ({ routes, layout: Layout }) => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={`key-${i + 1}`}
          path={route.path}
          exact={!!route.exact}
          render={(props) => (
            <Suspense fallback="loading">
              <Layout {...props} routes={routes}>
                <route.component {...props} routes={route.routes} />
              </Layout>
            </Suspense>
          )}
        />
      ))}
    </Switch>
  </Router>
);

RouterConfig.propTypes = {
  layout: PropTypes.any.isRequired,
  routes: PropTypes.array.isRequired,
};

export default RouterConfig;
