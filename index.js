#!/usr/bin/env node

/* jshint node:true */
'use strict';

var smc = require('./lib/semver-check');

module.exports = smc;

// If running as a cli program,
if (require.main === module) {

  // Check that the arg is at least a string containing 'package.json'.
  if (process.argv[2] && process.argv[2].indexOf('package.json') !== -1)
    // Using first() to get around the variadic nature of console.log.
    smc(require(process.argv[2])).forEach(first(console.log));
  else
    console.log('Specify location of package.json');

}

/**
 * Higher order function that takes a function and returns a function.
 * Inner closure "remembers" the function argument "func".
 * Inner closure applies the "remembered" function to x.
 * @param func A function that
 * @returns {Function} Returns a function that closes over "func".
 */
function first (func) {
  return function (x) {
    func(x);
  };
}
