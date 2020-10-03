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
    '@providers': path.resolve(__dirname, `${paths.appSrc}/common/providers/`),
    '@constants': path.resolve(__dirname, `${paths.appSrc}/common/constants/`),
    '@hooks': path.resolve(__dirname, `${paths.appSrc}/common/hooks/`),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/pages`),
  })(config, env);
  return config;
};
