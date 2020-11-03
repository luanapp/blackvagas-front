/**
 * Use the server pagination options when available or the default.
 *
 * @param {Object} options The server options.
 *
 * @return {Object} The pagination properties.
 */
function getPaginationProperties(options) {
  const { pagination } = options;
  const { count, data, empty, first, last, page, pages, total } = pagination || {};

  return {
    count: count || 'count',
    data: data || 'data',
    empty: empty || 'empty',
    first: first || 'first',
    last: last || 'last',
    page: page || 'page',
    pages: pages || 'pages',
    total: total || 'total',
  };
}

/**
 * Build the file path using the request and filter its content before using as response.
 *
 * @param {Object} method The method object.
 * @param {Object} req The request object.
 * @param {Mixed} content The original content.
 * @param {Object} options The server options.
 *
 * @return {Array} The raw content filtered.
 */
function createSearchableContent(method, req, content) {
  const {
    search: { parameter = 'search', properties },
  } = method;
  const { query } = req;

  const search = query[parameter] && query[parameter].toLowerCase();

  if (!search) {
    return content;
  }

  return content.filter(item => {
    const hasProperties = properties.map(property => {
      const itemProperty = item[property];
      return itemProperty && itemProperty.toLowerCase().includes(search);
    });
    return hasProperties.includes(true);
  });
}

/**
 * Build the file path using the request and create a paginated response with the file content.
 *
 * @param {Object} method The method object.
 * @param {Object} req The request object.
 * @param {Mixed} content The original content.
 * @param {Object} options The server options.
 *
 * @return {Object} The paginated content object.
 */
function createPaginatedContent(method, req, content, options) {
  const {
    query: { page: current = 0, size = 3 },
  } = req;

  const { count, data, empty, first, last, page, pages, total } = getPaginationProperties(options);

  const currentPage = Number(current);
  const currentSize = Number(size);

  const totalElements = content.length;
  const totalPages = Math.ceil(totalElements / size);

  const offset = currentPage * currentSize;

  return {
    offset,
    limit: size,
    size: totalElements,
    results: content.slice(offset, offset + currentSize),
    [empty]: content.slice(offset, offset + currentSize).length === 0,
    [first]: currentPage === 0,
    [last]: currentPage >= totalPages - 1,
    [page]: currentPage,
    [pages]: totalPages,
    [count]: currentSize,
    [total]: totalElements,
  };
}

module.exports = {
  createPaginatedContent,
  createSearchableContent,
};
