var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
  testMethod: function() {
    console.log("test method");
  }
});
