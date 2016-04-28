'use strict';

function requireDefault(p) {
  const m = require(p);

  return m && m.default ? m.default : m;
}

module.exports = requireDefault;
