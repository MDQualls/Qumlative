(function() {
    'use strict';

    var blogCatController = require('../controllers/blogCatController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.get('/api/blogCat/', function(req, res, next) { blogCatController.getAggregateCount(req, res, next);});
    };

    module.exports = routes;
})();