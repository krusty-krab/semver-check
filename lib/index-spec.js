var exec = require('child_process').exec;

describe('index.js ran as a cli program', function() {
  beforeEach(function (done) {
    exec(__dirname + '/../index.js', function handleErr(error, stdout, stderr) {

      if(stdout) console.log('\n### stdout: ', stdout);

      if(error)
        throw error;
      else
        done();

    });
  });

  it('should run semver-check against current dir when applied to no args.', function () {


  });
});
