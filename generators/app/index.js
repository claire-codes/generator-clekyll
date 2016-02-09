'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
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
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));

  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath(this.props.postTitle + 'dummyfile.txt'),
      {postTitle: this.props.postTitle,
        published: !(this.props.published),
        comments: this.props.comments}
    );
    this.log(this.props.postTitle + ' is a stupid title');

  // },
  //
  // install: function () {
  //   this.installDependencies();
}
});
