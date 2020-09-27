import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateComponent } from '@components';
import Header from './modules/header';
import Footer from './modules/footer';
import routes from './routes';

const Router = () => (
  <BrowserRouter>
    <Header routes={routes} />
    <Switch>
      {routes.map(({ id, exact, auth, path, component }) => (
        <Route
          key={id}
          exact={exact}
          path={path}
          render={props => <PrivateComponent auth={auth} {...props} Component={component} />}
        />
      ))}
    </Switch>
    <Footer routes={routes} />
  </BrowserRouter>
);

export default Router;
