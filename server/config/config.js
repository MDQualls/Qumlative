var path = require('path');

var rootPath = path.normalize(__dirname + '/../../public');
var prodPath = path.normalize(__dirname + '/../../build/');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/qumlative',
    port: process.env.PORT || 5000
  },
  production: {
    rootPath: prodPath,
    db: 'mongodb://localhost/qumlative',
    port: process.env.PORT || 80
  }
};