const server = require('./source/server');

/**
 * The server options.
 */
const options = {
	proxy: process.env.PROXY || 'http://localhost:3050',
};

const app = server(options);

const routes = [{
		path: '/users',
		methods: [{
			type: 'get',
		}],
	},
	{
		path: '/skills',
		methods: [{
			type: 'get',
		}],
	}, {
		path: '/login',
		methods: [{
			type: 'post'
		}]
	}
];

app.routes(routes).listen(process.env.PORT || 3050);
