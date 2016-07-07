(function() {
    'use strict';
    var User = require('mongoose').model('User');
    var builder = require('../util/userDtos');

    exports.getSuspends = function(req, res, next) {
        User.find({suspended:1}).exec(function(err, collection)  {

            if (err) {
                if (err) {return next(err);}
            }
            var result = builder.buildUserResponse(collection);
            res.send(result);
        });
    };

    exports.suspendUser = function(req, res, next)  {
        var id = req.params.id;
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

            if (user.suspended === 1) {
                user.suspended = 0;
                user.suspendDate = '';
            } else {
                var d = new Date();
                user.suspended = 1;
                user.suspendDate = d;
            }

            user.save(function(err) {
                if (err) { res.status(400); return res.send({reason:err.toString()}); }
                req.send(builder.buildUserResponse(user));
            });
        });
    };
})();