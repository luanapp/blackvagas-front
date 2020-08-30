const chalk = require('chalk');

const { log } = console;

/**
 * Display the endpoint information to the console.
 *
 * @param {String} type The http type.
 * @param {String} path The method path.
 * @param {Number} code The http code.
 */
function endpoint(method, path, code) {
  log(method, path, code);
}

module.exports = {
  logo() {
    log('\x1Bc');
    log('The fake backend service is running... 🎉');
  },
  success(status, path, code) {
    const type = chalk.green(status.toUpperCase());
    endpoint(type, path, code);
  },
  error(status, path, code) {
    const type = chalk.red(status.toUpperCase());
    endpoint(type, path, code);
  },
};
