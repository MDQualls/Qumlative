var auth = require('./auth');
var mongoose = require('mongoose');
var menuController = require('../controllers/menuController');
var blogController = require('../controllers/blogController');
var blogCategoryController = require('../controllers/blogCategoryController');
var blogStatusController = require('../controllers/blogStatusController');
var userController = require('../controllers/userController');
var banController = require('../controllers/banController');
var suspendController = require('../controllers/suspendController');
var blogCatController = require('../controllers/blogCatController');
var blogsForCatController = require('../controllers/blogsForCatController');

module.exports = function(app) {

    //handle menu
    app.get('/api/menu', function(req, res, next) { menuController.getMenu(req, res, next); });
    app.get('/api/menu/:memberOfMenu', function(req, res, next) { menuController.getMenuMembers(req, res, next); });
    app.post('/api/menu', auth.requiresRole('admin'), function(req, res, next) { menuController.createMenuItem(req, res, next); });
    app.put('/api/menu', auth.requiresRole('admin'), function(req, res, next) { menuController.updateMenuItem(req, res, next); });

    //handle blog
    app.get('/api/blog', function(req, res, next) { blogController.getBlogs(req, res, next); });
    app.get('/api/blog/:id', function(req, res, next) { blogController.getBlog(req, res, next); });
    app.get('/api/blog/:status', function(req, res, next) { blogController.getBlogsByStatus(req, res, next); });
    app.post('/api/blog', auth.requiresRole('admin'), function(req, res, next) { blogController.createBlog(req, res, next); });
    app.put('/api/blog', auth.requiresRole('admin'), function(req, res, next) { blogController.updateBlog(req, res, next); });

    //handle blog categories
    app.get('/api/blogCategory', function(req, res, next) { blogCategoryController.getBlogCategories(req, res, next); });
    app.get('/api/blogCategory/:id', function(req, res, next) { blogCategoryController.getBlogCategory(req, res, next); });
    app.post('/api/blogCategory', auth.requiresRole('admin'), function(req, res, next) { blogCategoryController.createBlogCategory(req, res, next); });
    app.put('/api/blogCategory', auth.requiresRole('admin'), function(req, res, next) { blogCategoryController.updateBlogCategory(req, res, next); });

    //handle blog statuses
    app.get('/api/blogStatus', function(req, res, next) { blogStatusController.getBlogStatuses(req, res, next); });
    app.get('/api/blogStatus/:id', function(req, res, next) { blogStatusController.getBlogStatus(req, res, next); });
    app.post('/api/blogStatus', auth.requiresRole('admin'), function(req, res, next) { blogStatusController.createBlogStatus(req, res, next); });
    app.put('/api/blogStatus', auth.requiresRole('admin'), function(req, res, next) { blogStatusController.updateBlogStatus(req, res, next); });

    //handle users
    app.get('/api/users', auth.requiresRole('admin'), function(req, res, next) { userController.getUsers(req, res, next); });
    app.post('/api/users', function(req, res, next) { userController.createUser(req, res, next); });
    app.put('/api/users', auth.requiresRole('admin'), function(req, res, next) { userController.updateUser(req, res, next); });

    //handle banning
    app.get('/api/ban', auth.requiresRole('admin'), function(req, res, next) { banController.getBans(req, res, next); });
    app.get('/api/ban/:id', auth.requiresRole('admin'), function(req, res, next) { banController.banUser(req, res, next); });

    //handle suspending
    app.get('/api/suspend', auth.requiresRole('admin'), function(req, res, next) { suspendController.getSuspends(req, res, next); });
    app.get('/api/suspend/:id', auth.requiresRole('admin'), function(req, res, next) { suspendController.suspendUser(req, res, next); });

    //get aggregate counts of blog posts by category
    app.get('/api/blogCat/', function(req, res, next) { blogCatController.getAggregateCount(req, res, next);});

    //get blogs for a selected category
    app.get('/api/blog/category/:category', function(req, res, next) { blogsForCatController.getBlogs(req, res, next);});

    //handle authentication
    app.post('/login', auth.authenticate);
    app.post('/logout', function(req, res) {  req.logout(); res.end(); });

    //handle bad routes
    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.send(404);
    });
};