'use strict';

var path = require('path');

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
  var m;

  try {
    m = require(path.join(path.dirname(module.parent.filename), p));
  } catch (err) {
    m = require(p);
  }

  return m && m.default ? m.default : m;
}

module.exports = requireDefault;
