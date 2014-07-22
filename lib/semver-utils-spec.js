/* jshint node:true */
'use strict';

var checkForPackageJson = require('./semver-utils').checkForPackagejson;

describe('One level deep search for a package.json file', function () {

  var dir;

  beforeEach(function () {
    dir = '../';
  });

  it('should succeed in the outer directory.', function () {
    expect(checkForPackageJson(dir)).toBeTruthy();
  });

  it('should fail in the current directory.', function () {
    expect(checkForPackageJson('./')).toBeFalsy();
  });

  it('should assume current directory if applied falsy parameter.', function () {
    expect(checkForPackageJson('')).toBeFalsy();
  });
});
