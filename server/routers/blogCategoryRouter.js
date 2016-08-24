(function() {
    'use strict';

    var blogCategoryController = require('../controllers/blogCategoryController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.get('/api/blogCategory', function(req, res, next) { blogCategoryController.getBlogCategories(req, res, next); });
        app.get('/api/blogCategory/:id', function(req, res, next) { blogCategoryController.getBlogCategory(req, res, next); });
        app.post('/api/blogCategory', auth.requiresRole('admin'), function(req, res, next) { blogCategoryController.createBlogCategory(req, res, next); });
        app.put('/api/blogCategory', auth.requiresRole('admin'), function(req, res, next) { blogCategoryController.updateBlogCategory(req, res, next); });

    };

    module.exports = routes;
})();