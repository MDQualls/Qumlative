(function() {
    'use strict';
    var User = require('mongoose').model('User');
    var builder = require('../util/userDtos');
    var sanitize = require('mongo-sanitize');

    exports.getBans = function(req, res, next) {
        User.find({banned:1}).exec(function(err, collection)  {

            if (err) {
                if (err) {return next(err);}
            }
            var result = builder.buildUserResponse(collection);
            res.send(result);
        });
    };

    exports.banUser = function(req, res, next)  {
        var id = sanitize(req.params.id);
        var user = {};

        if (id === undefined)  {
            res.status(400);
            return res.send({reason: 'id is a required parameter'});
        }

        User.findById({_id: id}).exec(function(err, collection) {

            if (err) {
                if (err) {return next(err);}
            }
            user = collection;

            if (user.banned === 1) {
                user.banned = 0;
            } else {
                user.banned = 1;
            }

            user.save(function(err) {
                if (err) { res.status(400); return res.send({reason:err.toString()}); }
                res.send(builder.buildUserResponse(user));
            });
        });
    };
})();