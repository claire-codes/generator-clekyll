'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-clekyll:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({postTitle: 'bananas', published: true, comments: true})
      .on('end', done);
  });

  it('creates a file', function () {
    var d = (new Date()).toISOString().slice(0, 10);
    assert.file([
      d + '-bananas.markdown'
    ]);
  });
});
