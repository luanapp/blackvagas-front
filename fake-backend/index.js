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
    path: '/jobs/:jobId/toggleFavoriteJob/:userId',
    methods: [
      {
        type: 'put',
        code: 204,
      },
    ],
  },
];

app.routes(routes).listen(process.env.PORT || 3050);
