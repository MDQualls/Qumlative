(function() {
    'use strict';

    var passwordController = require('../controllers/passwordController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.put('/api/password/:id', auth.requiresRole('user'), function(req, res, next) { passwordController.updatePassword(req, res, next);});
    };

    module.exports = routes;
})();