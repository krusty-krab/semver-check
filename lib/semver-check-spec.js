/* jshint node:true */
'use strict';

var semverCheck = require('./semver-check');

describe('Semver pre-commit check', function () {

  var packagejson;

  beforeEach(function () {
    packagejson = {
      dependencies: {
        markrogers: '~0.3.0',
        joegrund: '=1.2.11',
        willjohnson: '<0.0.2',
        chrisgearing: '>0.3.5',
        francine: '<=0.6.0',
        sunshine: '>=0.20.1',
        piglet: '^0.1.3'
      }
    };
  });

  it('should report each item is not pinned to a specific version on the dependencies stanza with Semantic Version characters.', function () {

    semverCheck(packagejson).forEach(function (result) {
      expect(result).toContain('not pinned to specific version');
    });

  });

  describe('on the devDependencies stanza with Semantic Version characters', function () {

    beforeEach(function () {
      packagejson.devDependencies = packagejson.dependencies;
      delete packagejson.dependencies;
    });

    it('should report each item is not pinned to a specific version.', function () {

      semverCheck(packagejson).forEach(function (result) {
        expect(result).toContain('not pinned to specific version');
      });

    });

  });

  describe('on the both dependencies stanzas without Semantic Version characters', function () {

    beforeEach(function () {
      // Note: Array#reduce() modifies the object in place.
      packagejson.devDependencies = Object.keys(packagejson.dependencies)
        .reduce(removeChars, packagejson.dependencies);

      /**
       * Remove semantic version characters from each dependency.
       * @example http://joegrund.com/array-reduce-to-populate-an-object/
       * @param {Object} obj Key/value pair reference object.
       * @param {String} dependency Key of the key/value pair.
       * @returns {Object}
       */
      function removeChars (obj, dependency) {
        // ...and remove the semver chars...
        obj[dependency] = obj[dependency].replace(/[*=~<>^]/g, '');

        return obj;
      }
    });

    it('should report an empty array.', function() {
      expect(semverCheck(packagejson)).toEqual([]);
    });

  });

});
