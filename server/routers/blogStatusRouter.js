(function () {
    'use strict';

    var blogStatusController = require('../controllers/blogStatusController');
    var auth = require('../config/auth');

    var routes = function (app) {
        app.get('/api/blogStatus', function (req, res, next) { blogStatusController.getBlogStatuses(req, res, next); });
        app.get('/api/blogStatus/:id', function (req, res, next) { blogStatusController.getBlogStatus(req, res, next); });
        app.post('/api/blogStatus', auth.requiresRole('admin'), function (req, res, next) { blogStatusController.createBlogStatus(req, res, next); });
        app.put('/api/blogStatus', auth.requiresRole('admin'), function (req, res, next) { blogStatusController.updateBlogStatus(req, res, next); });

    };

    module.exports = routes;
})();