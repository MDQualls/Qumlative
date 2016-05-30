var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var menuController = require('../controllers/menuController');

module.exports = function(app) {

    app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
            User.find({}).exec(function(err, collection)  {
                res.send(collection);
            });
        });

    //handle menu
    app.get('/api/menu', function(req, res)  {
       menuController.getMenu();
    });
    app.post('/api/menu', auth.requiresRole('admin'), function(req, res) {
       menuController.createMenuItem();
    });
    app.post('/api/menu', auth.requiresRole('admin'), function(req, res) {
       menuController.updateMenuItem();
    });

    //handle logging in and logging out
    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res)  {
        req.logout();
        res.end();
    });

    //handle bad routes
    app.all('/api/*', function(req, res) {
        res.send(404);
    });
    app.get('*', function(req, res) {
        res.send(404);
    });
};