'use strict';

/**
 * Require ES2015 default module
 * 
 * @param  {String} p - path to module.
 * @return {Any}        module
 *
 * @example
 * var m = requireDefault('lib/index.js');
 */
function requireDefault(p) {
  var m = require(p);

  return m && m.default ? m.default : m;
}

module.exports = requireDefault;
