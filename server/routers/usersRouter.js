(function () {
    'use strict';

    var userController = require('../controllers/userController');
    var auth = require('../config/auth');

    var routes = function (app) {
        app.get('/api/users', auth.requiresRole('admin'), function(req, res, next) { userController.getUsers(req, res, next); });
        app.post('/api/users', function(req, res, next) { userController.createUser(req, res, next); });
        app.put('/api/users', auth.requiresRole('admin'), function(req, res, next) { userController.updateUser(req, res, next); });

    };

    module.exports = routes;
})();