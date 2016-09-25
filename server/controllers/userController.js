(function() {
    'use strict';

    var User = require('mongoose').model('User');
    var Encrypt = require('../util/encryption');
    var builder = require('../util/userDtos');
    var sanitize = require('mongo-sanitize');

    exports.getUsers = function(req, res, next) {
        User.find({}).exec(function(err, collection)  {

            if (err) {
                if (err) {return next(err);}
            }
            var result = builder.buildUserResponse(collection);
            res.send(result);
        });
    };

    exports.getUser = function(req, res, next)  {
        var id = sanitize(req.params.id);

        if (id === undefined)  {
            res.status(400);
            return res.send({reason: 'id is a required parameter'});
        }

        User.findById({_id: id}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(builder.buildUserResponseSingle(collection));
        });
    };

    exports.createUser = function(req, res, next) {
        var userData = sanitize(req.body);

        userData.username = userData.username.toLowerCase();
        userData.salt = Encrypt.createSalt();
        userData.hashedPwd = Encrypt.hashPwd(userData.salt, userData.password);
        userData.roles = ['user'];

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
                    res.send(builder.buildUserResponseSingle(user));
                });
            }
        );
    };

    exports.updateUser = function(req, res, next) {
        var userUpdates = sanitize(req.body);

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
            res.send(builder.buildUserResponseSingle(req.user));
        });
    };
})();