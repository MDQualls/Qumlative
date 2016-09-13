(function() {
    'use strict';

    var commentController = require('../controllers/commentController');
    var auth = require('../config/auth');

    var routes = function(app)  {
        app.get('/api/comment/:id',function(req, res, next) {commentController.getComment(req, res, next);});
        app.get('/api/comment/:forId/for',function(req, res, next) {commentController.getComments(req, res, next);});
        app.post('/api/comment', auth.requiresRole('user'), function(req, res, next) {commentController.addComment(req, res, next);});
        app.put('/api/comment/:id/:username', auth.requiresRole('user'),function(req, res, next) {commentController.updateComment(req, res, next);});
        app.delete('/api/comment/:id/:username', auth.requiresRole('user'),function(req, res, next) {commentController.deleteComment(req, res, next);});
    };

    module.exports = routes;

})();