'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('no categories added', function() {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        postTitle: 'Bananas and Cucumbers',
        postSummary: 'Fruits and vegetables',
        published: true,
        comments: true,
        categories: false
      })
      .on('end', done);
  });

  it('creates a file with expected yaml', function() {
    var d = (new Date()).toISOString().slice(0, 10);
    assert.file([
      d + '-bananas-and-cucumbers.markdown'
    ]);
    assert.fileContent(d + '-bananas-and-cucumbers.markdown',
      /---\nlayout: post\ntitle: Bananas and Cucumbers\nsummary: Fruits and vegetables\ndate: \d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\ncomments: true\npublished: false\ncategories:\n- \n---\n/
    );
  });

  it('does yo-rc.json stuff', function() {
    assert.file([
      '.yo-rc.json'
    ]);
  });
});

describe('with category added', function() {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        postTitle: 'Bananas and Cucumbers',
        postSummary: '',
        published: true,
        comments: true,
        categories: true,
        category: 'fruits'
      })
      .on('end', done);
  });

  it('creates a file', function() {
    var d = (new Date()).toISOString().slice(0, 10);
    assert.file([
      d + '-bananas-and-cucumbers.markdown'
    ]);
    assert.fileContent(d + '-bananas-and-cucumbers.markdown',
      /---\nlayout: post\ntitle: Bananas and Cucumbers\nsummary: \ndate: \d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\ncomments: true\npublished: false\ncategories:\n- fruits\n---\n/
    );
  });
});
