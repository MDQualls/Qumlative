(function() {
    'use strict';

    var User = require('mongoose').model('User');
    var builder = require('../util/userDtos');
    var dateHandler = require('../util/dateHandling');

    var suspensionDays = 10;

    exports.isSuspended = function(id)  {
        var user = {};

        User.findById({_id: id}).exec(function(err, collection) {

            if (err) {
                return err;
            }
            user = collection;

            if (user.suspended === 1) {
                var d = new Date();
                if (dateHandler.daydiff(d, user.suspendDate) > suspensionDays) {
                    user.suspended = 0;
                    user.suspendDate = '';
                    user.save(function(err) {
                        if (err) { return err.toString(); }
                    });
                    return false;
                }
                return true;
            }
            return false;
        });
    }
})();