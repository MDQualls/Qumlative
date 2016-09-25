(function() {
    'use strict';

    var Comment = require('mongoose').model('Comment');
    var sanitize = require('mongo-sanitize');

    exports.getComment = function(req, res, next) {
        var id = sanitize(req.params.id);

        if (id === undefined)  {
            res.status(400);
            return res.send({reason:'id is a required parameter'});
        }

        Comment.findById({_id: id}).exec(function(err, collection) {
            if (err) {return next(err);}
            res.send(collection);
        });
    };

    exports.getComments = function(req, res, next) {
        var commentForId = sanitize(req.params.forId);

        if (commentForId === undefined) {
            res.status(400);
            return res.send({reason:'forId is a required pararmeter'});
        }

        Comment.find({commentForId: commentForId}).sort({'dateOfComment': -1}).exec(function(err, collection) {
            if (err) {return next(err);}
            res.send(collection);
        });
    };

    exports.addComment = function(req, res, next) {
        var commentData = sanitize(req.body);
        Comment.create(commentData, function(err, comment) {
            if (err) {
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.send(comment);
        });
    };

    exports.updateComment = function(req, res, next) {
        var id = sanitize(req.body._id);
        var username = sanitize(req.body.username);
        var commentData = sanitize(req.body);

        Comment.findById({_id:id, username: username}, function(err, comment) {
            if (err) {
                return next(err);
            }
            if (comment === undefined) {
                res.status(400);
                return res.send({reason:'Updatable comment not found'});
            }

            comment.comment = commentData.comment;
            comment.dateUpdated = new Date();

            comment.save(function(err) {
                if (err) {
                    return next(err);
                }

                res.send(comment);
            });
        });
    };

    exports.deleteComment = function(req, res, next) {
        var id = sanitize(req.body._id);
        var username = sanitize(req.body.username);

        if (id === undefined)  {
            res.status(400);
            return res.send({reason:'id is a required parameter'});
        }

        if (username === undefined) {
            res.status(400);
            return res.send({reason:'username is a required parameter'});
        }

        Comment.deleteOne({_id:id},function(err, result) {
            if (err) {
                return next(err);
            }
            res.send(result);
        });
    };
})();