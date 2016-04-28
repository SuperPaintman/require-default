'use strict';

/**
 * Require ES2015 default module
 * 
 * @param  {String} p - path to module.
 * @return {Any}        module
 *
 * @example
 * const m = requireDefault('lib/index.js');
 */
function requireDefault(p) {
  const m = require(p);

  return m && m.default ? m.default : m;
}

module.exports = requireDefault;
