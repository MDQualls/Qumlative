(function() {
    'use strict';

    var blogsForCatController = require('../controllers/blogsForCatController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.get('/api/blog/category/:category', function(req, res, next) { blogsForCatController.getBlogs(req, res, next);});
        app.get('/api/blog/category/:category/:page/:pageSize/page', function(req, res, next) { blogsForCatController.getBlogsByPage(req, res, next);});
    };

    module.exports = routes;
})();