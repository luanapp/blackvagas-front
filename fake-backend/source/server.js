const cors = require('cors');
const express = require('express');
const httpProxyMiddleware = require('http-proxy-middleware');

const { createPaginatedContent, createSearchableContent } = require('./content.js');
const { error, success, logo } = require('./logger.js');
const { readFile } = require('./file.js');

function server(options) {
  const { middlewares, proxy } = options;

  const expressServer = express();

  let proxyResponse;

  if (proxy) {
    proxyResponse = httpProxyMiddleware(proxy);
  }

  expressServer.use(middlewares || cors());

  /**
   * Check whenever in remote mode.
   *
   * @param {Boolean} remote The method remote flag.
   *
   * @return {Boolean} Whenever in remote mode.
   */
  function isRemote(remote) {
    return remote || process.argv[2] === '--remote';
  }

  /**
   * Create a new response object.
   *
   * @param {Object} method The method object.
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   *
   * @return {Function} The response method.
   */
  function createMethodResponse(method, req, res) {
    const { code = 200, data, file, paginate, search, type } = method;
    const { path } = req;

    success(type, path, code);

    const response = res.status(code);

    if (data) {
      return response.send(data);
    }

    let content = readFile(file || path);

    if (search) {
      content = createSearchableContent(method, req, content, options);
    }

    if (paginate) {
      content = createPaginatedContent(method, req, content, options);
    }

    return response.send(content);
  }

  /**
   * Create a new route method.
   *
   * @param {Object} route The route object.
   * @param {Object} method The method object.
   */
  function createMethod(route, method) {
    const { path } = route;
    const { remote, type } = method;

    const response = createMethodResponse.bind(null, method);

    if (isRemote(remote) && proxyResponse) {
      expressServer[type](path, proxyResponse);
    } else {
      expressServer[type](path, response);
    }
  }

  /**
   * Create a new route.
   *
   * @param {Object} route The route object.
   */
  function createRoute(route) {
    const { methods } = route;

    const createRouteMethod = createMethod.bind(null, route);

    methods.map(createRouteMethod);
  }

  /**
   * Send an empty response.
   *
   * @param {Object} req The request object.
   * @param {Object} res The response object.
   */
  function errorRoute(req, res) {
    const { method, path } = req;

    error(method, path, 404);

    res.status(404).send();
  }

  return {
    /**
     * Register the server routes.
     *
     * @param {Array} routes The server routes.
     *
     * @return {Server} http.Server.
     */
    routes(routes) {
      routes.map(createRoute);
      return this;
    },

    /**
     * Start listening on port.
     *
     * @param {Integer} port The server port.
     *
     * @return {Server} http.Server.
     */
    listen(port) {
      expressServer.listen(port, logo);
      expressServer.use(errorRoute);
      return this;
    },
  };
}

module.exports = server;
