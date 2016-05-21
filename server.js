var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({username:username}).exec(function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        //if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      })
    })
);

passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user._id);
    }
  });

passport.deserializeUser(function(id, done) {
    User.findOne({_id:id}).exec(function(err, user) {
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  })

require('./server/config/route')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
