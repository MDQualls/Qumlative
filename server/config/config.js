var path = require('path');

var rootPath = path.normalize(__dirname + '/../../public');
var prodPath = path.normalize(__dirname + '/../../build/');

module.exports = {
  rootPath: rootPath,
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/qumlative',
    port: process.env.PORT || 5000
  },
  production: {
    rootPath: prodPath,
    db: 'mongodb://qumlativeUser:x6xzyi0visit!@ec2-54-175-35-131.compute-1.amazonaws.com:27017/qumlative',
    port: process.env.PORT || 3000
  }
};