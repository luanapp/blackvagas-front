import React from 'react';
import ReactDOM from 'react-dom';
import NotificationProvider from './common/providers/NotificationProvider';
import Layout from '@modules/layout';
import * as serviceWorker from './serviceWorker';
import RouterConfig from './router';
import routes from './routes';
import './i18n';

ReactDOM.render(
  <NotificationProvider>
    <RouterConfig routes={routes} layout={Layout} />
  </NotificationProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
