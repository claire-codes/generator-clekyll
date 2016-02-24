'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var x = require('clairex');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.config.save();
    var done = this.async();

    this.log(yosay(
      'Welcome to the cool ' + chalk.red('generator-clekyll') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'postTitle',
      message: 'What\'s the title of the post?'
    }, {
      type: 'confirm',
      name: 'published',
      message: 'Only a draft?'
    }, {
      type: 'confirm',
      name: 'comments',
      message: 'Enable comments?'
    }, {
      type: 'confirm',
      name: 'addCategory',
      message: 'Add category?'
    }, {
      type: 'input',
      name: 'category',
      message: 'What category?',
      default: '',
      when: function(answers) {
        return answers.addCategory === true;
      }
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var postDateTime = this._getPostDateTime();
    this.fs.copyTpl(
      this.templatePath('blogTemplate.markdown'),
      this.destinationPath(this._toUrl(this.props.postTitle)),
      {
        postTitle: this.props.postTitle,
        postDateTime: postDateTime,
        published: !(this.props.published),
        comments: this.props.comments,
        category: this.props.category
      }
    );
  },

  _getPostDateTime: function () {
    return (new Date()).toISOString().slice(0, 10) + ' ' + (new Date()).toISOString().slice(11, 19);
  },

  _getPostDate: function() {
    return (new Date()).toISOString().slice(0, 10);
  },

  _toUrl: function (str) {
    return this._getPostDate() + '-' + x.toUrl(str) + '.markdown';
  }
});
