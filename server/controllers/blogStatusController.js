(function() {
    'use strict';

    var BlogStatus = require('mongoose').model('BlogStatus');
    var sanitize = require('mongo-sanitize');

    exports.getBlogStatuses = function(req, res, next)  {

        BlogStatus.find({}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.getBlogStatus = function(req, res, next)  {
        var id = sanitize(req.params.id);

        if (id === undefined)  {
            res.status(400);
            return res.send({reason:'id is a required parameter'});
        }

        BlogStatus.findById({_id: id}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.createBlogStatus = function(req, res, next) {
        var blogStatusData = sanitize(req.body);
        BlogStatus.create(blogStatusData, function(err, status) {
            if (err) {
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.send(status);
        });
    };

    exports.updateBlogStatus = function(req, res, next) {
        var id = sanitize(req.params.id);
        var blogStatusData = sanitize(req.body);

        BlogStatus.findById({_id:id}, function(err, status)  {
            if (err) {
                return next(err);
            }

            status.category = blogStatusData.category;
            status.description = blogStatusData.description;

            status.save(function(err) {
                if (err) {
                    return next(err);
                }

                res.send(status);
            });
        });
    };

})();