(function() {
    'use strict';
    var User = require('mongoose').model('User');
    var Encrypt = require('../util/encryption');
    var builder = require('../util/userDtos');
    var sanitize = require('mongo-sanitize');

    exports.updatePassword = function(req, res, next) {
        var password = sanitize(req.body.password);
        var id = sanitize(req.params.id);

        User.findById({_id: id}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            var user = collection;
            console.log(user);
            console.log(password);
            if (password && password.length > 0) {
                user.salt = Encrypt.createSalt();
                user.hashedPwd = Encrypt.hashPwd(user.salt, password);
            }

            user.save(function(err) {
                if (err) { res.status(400); return res.send({reason:err.toString()}); }
                res.send(builder.buildUserResponseSingle(user));
            });
        });
    };
})();