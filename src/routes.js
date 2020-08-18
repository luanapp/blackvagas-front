import App from './App';

const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/login',
    label: 'Entrar',
    exact: true,
    component: App,
  },
  {
    path: '/register',
    label: 'Cadastrar',
    exact: true,
    component: App,
    routes: [
      {
        path: '/register/find',
        label: 'Encontrar',
        exact: true,
        component: App,
      },
      {
        path: '/register/new',
        label: 'Novo',
        exact: true,
        component: App,
      },
    ],
  },
  {
    path: '/jobs',
    label: 'Vagas',
    exact: true,
    component: App,
  },
  {
    path: '/companies',
    label: 'Para Empresas',
    exact: true,
    component: App,
  },
];

export default routes;
