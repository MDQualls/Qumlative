var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(app, config) {

  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(session({secret: 'PPQ M2 Cumulative Poop',resave:false,saveUninitialized:false}));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(config.rootPath));
  app.use(express.static('./'));
};
