'use strict';
/** Requires */
var path = require('path');

/** Constants */
var ERROR_CODE_MODULE_NOT_FOUND = 'MODULE_NOT_FOUND';

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
    /** Validate error */
    if (err.code === ERROR_CODE_MODULE_NOT_FOUND) {
      m = require(p);
    } else {
      throw err;
    }
  }

  return m && m.default ? m.default : m;
}

module.exports = requireDefault;
