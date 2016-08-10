var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/qumlative',
    port: process.env.PORT || 5000
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://localhost/qumlative',
    port: process.env.PORT || 80
  }
};