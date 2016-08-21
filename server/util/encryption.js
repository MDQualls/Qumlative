(function() {
    'use strict';

    var crypto = require('crypto');

    function createSalt() {
        return crypto.randomBytes(512).toString('base64');
    }

    function hashPwd(salt, pwd) {
        var hmac = crypto.createHmac('sha1', salt);
        hmac.setEncoding('hex');
        hmac.write(pwd);
        hmac.end();
        return hmac.read();
    }

    module.exports = {
        createSalt: createSalt,
        hashPwd: hashPwd
    };
})();