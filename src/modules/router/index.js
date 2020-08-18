import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RouterConfig = ({ routes, children }) => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={`key-${i + 1}`}
          path={route.path}
          exact={!!route.exact}
          render={(props) => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </Switch>

    {children}
  </Router>
);

export default RouterConfig;
