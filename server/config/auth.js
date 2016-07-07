var passport = require('passport');
var suspend = require('../util/suspension.js');

exports.authenticate = function(req, res, next) {
  var auth = passport.authenticate('local', function(err, user) {
    if (err) {console.log(err);return next(err);}
    if (!user) { res.send({success:false, reason: 'Username/Password combination incorrect'});}

    if (user.banned === 1) { res.send({success:false, reason:'User is Banned'});}
    if (suspend.isSuspended(user._id)) { res.send({success:false, reason:'User is Suspended'});}

    req.logIn(user, function(err) {
      if (err) {return next(err);}
      res.send({success:true, user: user});
    });
  });
  auth(req, res, next);
};

exports.requiresApiLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
      res.status(403);
      res.end();
    } else {
      next();
    }
  };

exports.requiresRole = function(role) {
    return function(req, res, next) {
      if (!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
        res.status(403);
        res.end();
      } else {
        next();
      }
    };
  };
