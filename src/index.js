import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './i18n';
import App from './App';
import NotificationProvider from '@providers/NotificationProvider';

ReactDOM.render(
  <StrictMode>
    <NotificationProvider>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </NotificationProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
