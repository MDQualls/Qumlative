(function() {
    'use strict';

    var banController = require('../controllers/banController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.get('/api/ban', auth.requiresRole('admin'), function(req, res, next) { banController.getBans(req, res, next); });
        app.get('/api/ban/:id', auth.requiresRole('admin'), function(req, res, next) { banController.banUser(req, res, next); });

    };

    module.exports = routes;
})();