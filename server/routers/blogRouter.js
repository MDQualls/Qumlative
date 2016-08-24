(function() {
    'use strict';

    var blogController = require('../controllers/blogController');
    var auth = require('../config/auth');

    var routes = function(app)  {

        app.get('/api/blog', function(req, res, next) { blogController.getBlogs(req, res, next); });
        app.get('/api/blog/:id', function(req, res, next) { blogController.getBlog(req, res, next); });
        app.get('/api/blog/:page/:pageSize/page', function(req, res, next) { blogController.getBlogsByPage(req, res, next); });
        app.get('/api/blog/:status', function(req, res, next) { blogController.getBlogsByStatus(req, res, next); });
        app.post('/api/blog', auth.requiresRole('admin'), function(req, res, next) { blogController.createBlog(req, res, next); });
        app.put('/api/blog', auth.requiresRole('admin'), function(req, res, next) { blogController.updateBlog(req, res, next); });
        app.get('/api/blogtop', function(req, res, next) { blogController.topBlog(req, res, next); });

        //get blog counts
        app.get('/api/blogCount', function(req, res, next) { blogController.blogCount(req, res, next);});
        app.get('/api/blogCount/:category', function(req, res, next) { blogController.blogCountCategory(req, res, next);});
    };

    module.exports = routes;
})();