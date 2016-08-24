(function() {
    'use strict';

    var menuController = require('../controllers/menuController');
    var auth = require('../config/auth');

    var routes = function(app)  {

        app.get('/api/menu', function(req, res, next) { menuController.getMenu(req, res, next); });
        app.get('/api/menu/:memberOfMenu', function(req, res, next) { menuController.getMenuMembers(req, res, next); });
        app.post('/api/menu', auth.requiresRole('admin'), function(req, res, next) { menuController.createMenuItem(req, res, next); });
        app.put('/api/menu', auth.requiresRole('admin'), function(req, res, next) { menuController.updateMenuItem(req, res, next); });
    };

    module.exports = routes;
})();