const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@services': path.resolve(__dirname, `${paths.appSrc}/services/`),
    '@modules': path.resolve(__dirname, `${paths.appSrc}/modules/`),
    '@config': path.resolve(__dirname, `${paths.appSrc}/config/`),
  })(config, env);
  return config;
};
