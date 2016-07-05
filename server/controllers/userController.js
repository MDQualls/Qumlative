(function() {
    'use strict';

    var User = require('mongoose').model('User');
    var Encrypt = require('../util/encryption');

    function buildUser(userInstance)  {
        var user = {};

        user.firstName = userInstance.firstName;
        user.lastName = userInstance.lastName;
        user.username = userInstance.username;
        user.emailAddress = userInstance.emailAddress;
        user.roles = userInstance.roles;

        return user;
    }

    function buildUserResponse(users)  {

        if (users.isArray() === false) {
            var user = {};
            user = buildUser(users);
            return user;
        } else {
            var userResponse = [];
            for (var u = 0; u < users.length; u++) {
                userResponse.push(buildUser(users[u]));
            }
            return userResponse;
        }
    }

    exports.getUsers = function(req, res, next) {
        User.find({}).exec(function(err, collection)  {

            if (err) {
                if (err) {return next(err);}
            }

            res.send(this.buildUserResponse(collection));
        });
    };

    exports.getUser = function(req, res, next)  {
        var id = req.params.id;

        if (id === undefined)  {
            res.status(400);
            return res.send({reason: 'id is a required parameter'});
        }

        User.findById({_id: id}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(this.buildUserResponse(collection));
        });
    };

    exports.createUser = function(req, res, next) {
        var userData = req.body;

        userData.username = userData.username.toLowerCase();
        userData.salt = Encrypt.createSalt();
        userData.hashedPwd = Encrypt.hashPwd(userData.salt, userData.password);

        User.create(userData, function(err, user) {
            if (err) {
                if (err.toString().indexOf('E11000') > -1) {
                    err = new Error('Duplicate Username');
                }
                res.status(400);
                return res.send({reason:err.toString()});
            }
            req.logIn(user, function(err) {
                if (err) {return next(err);}
                    res.send(this.buildUserResponse(user));
                });
            }
        );
    };

    exports.updateUser = function(req, res, next) {
        var userUpdates = req.body;

        if (req.user._id !== userUpdates._id && !req.user.hasRole('admin')) {
            res.status(403);
            return res.end();
        }

        req.user.firstName = userUpdates.firstName;
        req.user.lastName = userUpdates.lastName;
        req.user.username = userUpdates.username;
        req.user.emailAddress = userUpdates.emailAddress;

        if (userUpdates.password && userUpdates.password.length > 0) {
            req.user.salt = Encrypt.createSalt();
            req.user.hashedPwd = Encrypt.hashPwd(req.user.salt, userUpdates.password);
        }

        req.user.save(function(err) {
            if (err) { res.status(400); return res.send({reason:err.toString()}); }
            res.send(req.user);
        });
    };

})();