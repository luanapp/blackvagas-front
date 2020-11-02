const server = require('./source/server');

/**
 * The server options.
 */
const options = {
  proxy: process.env.PROXY || 'http://localhost:3050',
};

const app = server(options);

const routes = [
  {
    path: '/users',
    methods: [
      {
        type: 'get',
      },
    ],
  },
  {
    path: '/skills',
    methods: [
      {
        type: 'get',
      },
    ],
  },
  {
    path: '/login',
    methods: [
      {
        type: 'post',
        code: 200,
      },
    ],
  },
  {
    path: '/reset-password',
    methods: [
      {
        type: 'post',
        code: 204,
      },
    ],
  },
  {
    path: '/change-password',
    methods: [
      {
        type: 'post',
        code: 204,
      },
    ],
  },
  {
    path: '/check-pass-token',
    methods: [
      {
        type: 'post',
        code: 200,
      },
    ],
  },
  {
    path: '/jobs',
    methods: [
      {
        type: 'get',
        code: 200,
      },
    ],
  },
  {
    path: '/jobs/locations',
    methods: [
      {
        type: 'get',
        code: 200,
      },
    ],
  },
  {
    path: '/jobs/types',
    methods: [
      {
        type: 'get',
        code: 200,
      },
    ],
  },
  {
    path: '/jobs/f9af217f-88dc-4992-b734-ca690658afa5/toggleFavoriteJob/476f0bdd-84e0-4de1-a61f-f4bc730dd8d0',
    methods: [
      {
        type: 'get',
        code: 204,
      },
    ],
  },
];

app.routes(routes).listen(process.env.PORT || 3050);
