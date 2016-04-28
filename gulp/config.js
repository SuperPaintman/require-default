'use strict';
/** Requires */
const fs            = require('fs');
const path          = require('path');

// Utils
const yaml          = require('js-yaml');

/** Constants */
const eslintConfig = yaml.load(
  fs.readFileSync(path.join(process.cwd(), './.eslintrc.yml')).toString()
);

const paths = (function () {
  const $p = {};

  /** Lint */
  $p.lint = {};
  // js
  $p.lint.js = {};
  $p.lint.js.from = [
    './index.js',
    './gulp/**/*.js',
    './gulpfile.js'
  ];
  $p.lint.js.watch = $p.lint.js.from;

  return $p;
})();

module.exports = {
  paths: paths,

  eslint: eslintConfig
};
