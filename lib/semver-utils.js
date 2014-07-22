/* jshint node:true */
'use strict';

module.exports = {
  checkForPackagejson: checkForPackagejson
};

/**
 * Checks a directory for a package.json file.
 * @param {String} dir Path to a directory where a package.json file should be.
 * @returns {boolean} Whether it was found.
 */
function checkForPackagejson (dir) {
  try {
    if(dir) return require(dir + 'package.json');
    return require('./package.json');
  } catch (err) {
    return false;
  }
}
