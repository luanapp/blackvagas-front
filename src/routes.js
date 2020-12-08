import Void from './Void';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import ResetPassword from './modules/password-reset';
import NewPassword from './modules/new-password';
import JobsPage from './pages/jobs';

const routes = [
  {
    id: 1,
    order: 0,
    path: '/',
    component: LandingPage,
    exact: true,
    visible: false,
    auth: false,
  },
  {
    id: 2,
    order: 0,
    path: '/password-reset',
    component: ResetPassword,
    exact: true,
    visible: false,
    auth: false,
  },
  {
    id: 3,
    order: 1,
    path: '/login',
    label: 'enter',
    exact: true,
    component: LoginPage,
    visible: true,
    auth: false,
  },
  {
    id: 4,
    order: 2,
    path: '/register',
    label: 'register',
    exact: true,
    component: Void,
    visible: true,
    auth: false,
    routes: [
      {
        id: 5,
        path: '/find',
        label: 'find',
        component: Void,
      },
      {
        id: 6,
        path: '/new',
        label: 'new',
        component: Void,
      },
    ],
  },
  {
    id: 7,
    order: 3,
    path: '/jobs',
    label: 'jobs-vacancies',
    exact: true,
    component: JobsPage,
    visible: true,
    auth: false,
  },
  {
    id: 8,
    order: 4,
    path: '/companies',
    label: 'for-companies',
    exact: true,
    component: Void,
    visible: true,
    auth: false,
  },
  {
    id: 9,
    order: 1,
    path: '/new-password',
    label: 'new-password',
    exact: false,
    component: NewPassword,
    visible: false,
    auth: false,
  },
];

export default routes;
