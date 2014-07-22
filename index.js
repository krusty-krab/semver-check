#!/usr/bin/env node
'use strict';

var utils = require('lib/semver-utils');

module.exports = require('./lib/semver-check');

// If running as a cli program,
if (require.main === module) {
  var valid = false;

  // If there is no cli arg, assume the dir has a package.json.
  if (!process.argv[2]) {
    valid = utils.checkForPackagejson();
    // So there is a cli arg, check that it's at least a string containing 'package.json'.
  } else if (process.argv[2] && process.argv[2].indexOf('package.json') !== -1) {

  } else {

  }

  if (!valid) console.log('Specify location of package.json');
}
