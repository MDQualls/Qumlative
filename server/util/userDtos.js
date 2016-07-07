(function() {
    'use strict';

    function buildUser(userInstance)  {
        var user = {};

        user.firstName = userInstance.firstName;
        user.lastName = userInstance.lastName;
        user.username = userInstance.username;
        user.emailAddress = userInstance.emailAddress;
        user.roles = userInstance.roles;
        user.banned = userInstance.banned;
        user.suspended = userInstance.suspended;

        return user;
    }

    exports.buildUserResponse = function(users)  {

        var userResponse = [];

        for (var u = 0; u < users.length; u++) {
            userResponse.push(buildUser(users[u]));
        }
        return userResponse;
    };

})();