const { readdirSync, readFileSync } = require('fs');
const { basename, dirname, extname, join } = require('path');

function direntIsFile(dirent) {
  return dirent.isFile();
}

function direntIncludes(filename, dirent) {
  return dirent.name.includes(filename);
}

/**
 * Read the file and parse its content.
 *
 * @param {String} path The file path.
 *
 * @return {Mixed} The file content.
 */
function readJSONSync(path) {
  const buffer = readFileSync(path);
  return JSON.parse(buffer);
}

/**
 * Read the fixture and parse its content.
 *
 * @param {String} path The fixture path.
 *
 * @return {Mixed} The fixture content.
 */
function readFixtureSync(path) {
  if (extname(path) === '.json') {
    return readJSONSync(path);
  }

  return readFileSync(path);
}

/**
 * Read the first file from path using dirname that matches the path basename.
 *
 * @param {String} path The file path.
 *
 * @return {Mixed} The file content.
 */
function readPathSync(path) {
  const folder = dirname(path);
  const file = basename(path);

  const directory = join('data', folder);

  const options = { withFileTypes: true };

  const direntIncludesFile = direntIncludes.bind(null, file);

  const [fixture] = readdirSync(directory, options)
    .filter(direntIsFile)
    .filter(direntIncludesFile);

  return readFixtureSync(join('data', folder, fixture.name));
}

module.exports = {
  /**
   * Read the file and use its content as response.
   *
   * @param {String} path The file path.
   *
   * @return {Mixed} The file content.
   */
  readFile(path) {
    const extension = extname(path);

    if (extension) {
      return readFixtureSync(path);
    }

    return readPathSync(path);
  },
};
