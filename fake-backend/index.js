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
        code: 400,
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
];

app.routes(routes).listen(process.env.PORT || 3050);
