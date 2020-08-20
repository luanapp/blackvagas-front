import App from './App';

const routes = [
  {
    order: 0,
    path: '/',
    component: App,
    exact: true,
    visible: false,
  },
  {
    order: 1,
    path: '/login',
    label: 'Entrar',
    exact: true,
    component: App,
    visible: true,
  },
  {
    order: 2,
    path: '/register',
    label: 'Cadastrar',
    exact: true,
    component: App,
    visible: true,
    routes: [
      {
        path: '/find',
        label: 'Encontrar',
        component: App,
      },
      {
        path: '/new',
        label: 'Novo',
        component: App,
      },
    ],
  },
  {
    order: 3,
    path: '/jobs',
    label: 'Vagas',
    exact: true,
    component: App,
    visible: true,
  },
  {
    order: 4,
    path: '/companies',
    label: 'Para Empresas',
    exact: true,
    component: App,
    visible: true,
  },
];

export default routes;
