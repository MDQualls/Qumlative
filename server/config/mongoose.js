var mongoose = require('mongoose');
var userSchema = require('../schema/userSchema');
var menuSchema = require('../schema/menuSchema');
var blogSchema = require('../schema/blogSchema');
var blogCategorySchema = require('../schema/blogCategorySchema');
var statusCategorySchema = require('../schema/blogStatusSchema');
var commentSchema = require('../schema/commentSchema');

module.exports = function(config) {
  console.log('DB CONNECTING: ' + config.db);
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function callback()  {
    console.log('qumlative db opened');
  });

  userSchema.createDefaultUsers();
  menuSchema.createDefaultMenu();
  blogCategorySchema.createDefaultCategories();
  statusCategorySchema.createDefaultStatuses();

};