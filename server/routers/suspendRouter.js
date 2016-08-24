(function() {
    'use strict';

    var suspendController = require('../controllers/suspendController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.get('/api/suspend', auth.requiresRole('admin'), function(req, res, next) { suspendController.getSuspends(req, res, next); });
        app.get('/api/suspend/:id', auth.requiresRole('admin'), function(req, res, next) { suspendController.suspendUser(req, res, next); });
    };

    module.exports = routes;
})();