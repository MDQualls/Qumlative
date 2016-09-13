var auth = require('./auth');
var mongoose = require('mongoose');
var menuRouter = require('../routers/menuRouter');
var blogRouter = require('../routers/blogRouter');
var blogCategoryRouter = require('../routers/blogCategoryRouter');
var blogStatusRouter = require('../routers/blogStatusRouter');
var usersRouter = require('../routers/usersRouter');
var bansRouter = require('../routers/bansRouter');
var suspendRouter = require('../routers/suspendRouter');
var blogCatRouter = require('../routers/blogCatRouter');
var blogsForCatRouter = require('../routers/blogsForCatRouter');
var passwordRouter = require('../routers/passwordRouter');
var commentRouter = require('../routers/commentRouter');

module.exports = function(app) {

    //handle menu
    menuRouter(app);

    //handle blog
    blogRouter(app);

    //handle blog categories
    blogCategoryRouter(app);

    //handle blog statuses
    blogStatusRouter(app);

    //handle comments
    commentRouter(app);

    //handle users
    usersRouter(app);

    //handle banning
    bansRouter(app);

    //handle suspending
    suspendRouter(app);

    //get aggregate counts of blog posts by category
    blogCatRouter(app);

    //get blogs for a selected category
    blogsForCatRouter(app);

    //handle authentication
    app.post('/login', auth.authenticate);
    app.post('/logout', function(req, res) {  req.logout(); res.end(); });

    //update password
    passwordRouter(app);

    //handle bad routes
    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function(req, res) {
        res.send(404);
    });
};