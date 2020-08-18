import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './modules/layout';
import * as serviceWorker from './serviceWorker';
import RouterConfig from './modules/router';
import routes from './routes';

ReactDOM.render(
  <RouterConfig routes={routes}>
    <Layout routes={routes} />
  </RouterConfig>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
