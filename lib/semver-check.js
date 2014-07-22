/* jshint node:true */
'use strict';

var format = require('util').format;
var tokens = /[*=~<>^]/;


/**
 * Checks each key in the object for values that
 * contain semantic version characters.
 * If found, they are printed to stdout.
 * @example
 * // returns piglet not pinned to specific version
 * semverCheck({
 *   dependencies: {
 *     piglet: '^0.1.3'
 *   }
 * });
 * @param {Object} packageJson package.json.
 * @returns {Array} An array whose items are pretty-print ready.
 */
function semverCheck (packageJson) {

  // If the arg is falsy, return an empty array.
  if(!packageJson) return [];

  var dependencies = packageJson.dependencies || {};
  var devDependencies = packageJson.devDependencies || {};

  // Return a concatenation of the result of the 'checkStanza' function
  // applied to both variables, 'dependencies' and 'devDependencies'.
  // Then, take the result of the concat and map over that array inline to
  // get the pretty print output.
  return checkStanza(dependencies)
    .concat(checkStanza(devDependencies))
    .map(function prettyPrint(dependency) {
      return format('%s not pinned to specific version', dependency);
    });
}

/**
 * Check each item for semver chars.
 * @param {Object} stanza Object with dependency name/version pairs within
 * package.json.
 * @returns {Array} A new array with all the elements that contain any of the
 * semver chars we have decided to disallow.
 */
function checkStanza (stanza) {

  return Object.keys(stanza).filter(function checkDepValues (dependency) {

    // Return the dependencies that have at least one of the chars within.
//    if (tokens.test(stanza[dependency])) return dependency;
    return tokens.test(stanza[dependency]);

  });

}
module.exports = semverCheck;
