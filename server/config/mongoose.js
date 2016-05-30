var mongoose = require('mongoose');
var userSchema = require('../schema/userSchema');
var menuSchema = require('../schema/menuSchema');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function callback()  {
    console.log('qumlative db opened');
  });

  userSchema.createDefaultUsers();
  menuSchema.createDefaultMenu();

};