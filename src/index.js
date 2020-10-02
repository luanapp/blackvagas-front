import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import * as serviceWorker from './serviceWorker';
import './i18n';
import App from './App';
import NotificationProvider from '@providers/NotificationProvider';
import Backdrop from '@components/Backdrop';

const reactQueryConfig = { suspense: true };
ReactDOM.render(
  <StrictMode>
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <NotificationProvider>
        <Suspense fallback={<Backdrop />}>
          <App />
        </Suspense>
      </NotificationProvider>
    </ReactQueryConfigProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
