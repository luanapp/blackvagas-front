import App from './App';
import Landing from './modules/landing';
import Login from './modules/login';
import ResetPassword from './modules/password-reset';

const routes = [
  {
    order: 0,
    path: '/',
    component: Landing,
    exact: true,
    visible: false,
    auth: false,
  },
  {
    order: 0,
    path: '/password-reset',
    component: ResetPassword,
    exact: true,
    visible: false,
    auth: false,
  },
  {
    order: 1,
    path: '/login',
    label: 'enter',
    exact: true,
    component: Login,
    visible: true,
    auth: false,
  },
  {
    order: 2,
    path: '/register',
    label: 'register',
    exact: true,
    component: App,
    visible: true,
    auth: false,
    routes: [
      {
        path: '/find',
        label: 'find',
        component: App,
      },
      {
        path: '/new',
        label: 'new',
        component: App,
      },
    ],
  },
  {
    order: 3,
    path: '/jobs',
    label: 'jobs-vacancies',
    exact: true,
    component: App,
    visible: true,
    auth: true,
  },
  {
    order: 4,
    path: '/companies',
    label: 'for-companies',
    exact: true,
    component: App,
    visible: true,
    auth: false,
  },
];

export default routes;
