import App from './App';
import Landing from './modules/landing';

const routes = [
  {
    order: 0,
    path: '/',
    component: Landing,
    exact: true,
    visible: false,
  },
  {
    order: 1,
    path: '/login',
    label: 'enter',
    exact: true,
    component: App,
    visible: true,
  },
  {
    order: 2,
    path: '/register',
    label: 'register',
    exact: true,
    component: App,
    visible: true,
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
  },
  {
    order: 4,
    path: '/companies',
    label: 'for-companies',
    exact: true,
    component: App,
    visible: true,
  },
];

export default routes;
