import App from './App';
import Landing from './modules/landing';
import Login from './modules/login';
import ResetPassword from './modules/password-reset';

const routes = [{
    id: 0,
    order: 0,
    path: '/',
    component: Landing,
    exact: true,
    visible: false,
    auth: false,
  },
  {
    id: 1,
    order: 0,
    path: '/password-reset',
    component: ResetPassword,
    exact: true,
    visible: false,
    auth: false,
  },
  {
    id: 2,
    order: 1,
    path: '/login',
    label: 'enter',
    exact: true,
    component: Login,
    visible: true,
    auth: false,
  },
  {
    id: 3,
    order: 2,
    path: '/register',
    label: 'register',
    exact: true,
    component: App,
    visible: true,
    auth: false,
    routes: [{
        id: 4,
        path: '/find',
        label: 'find',
        component: App,
      },
      {
        id: 5,
        path: '/new',
        label: 'new',
        component: App,
      },
    ],
  },
  {
    id: 6,
    order: 3,
    path: '/jobs',
    label: 'jobs-vacancies',
    exact: true,
    component: App,
    visible: true,
    auth: true,
  },
  {
    id: 7,
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
