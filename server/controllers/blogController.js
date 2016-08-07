(function() {
    'use strict';

    var Blog = require('mongoose').model('Blog');

    //query a specific blog by id
    exports.getBlog = function(req, res, next)  {
        var id = req.params.id;

        if (id === undefined)  {
            res.status(400);
            return res.send({reason:'id is a required parameter'});
        }

        Blog.findById({_id: id}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    //query all blogs for a status
    exports.getBlogsByStatus = function(req, res, next)  {
        var status = req.params.status;

        if (status === undefined)  {
            res.status(400);
            return res.send({reason:'status is a required parameter'});
        }

        Blog.find({status: status}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    //query all blogs regardless of status
    exports.getBlogs = function(req, res, next)  {
        Blog.find().exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    //query all blogs regardless of status
    exports.getBlogsByPage = function(req, res, next)  {
        var page = parseFloat(req.params.page);
        var pageSize = parseFloat(req.params.pageSize);

        Blog.find({'datePosted': {$lte: new Date()}, 'status': 'Post'}).skip((page * pageSize) - pageSize).limit(pageSize).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.createBlog = function(req, res, next) {
        var blogData = req.body;
        Blog.create(blogData, function(err, blog) {
            if (err) {
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.send(blog);
        });
    };

    exports.updateBlog = function(req, res, next) {
        var id = req.body._id;
        var blogData = req.body;

        Blog.findById({_id:id}, function(err, blog)  {
            if (err) {
                return next(err);
            }

            blog.title = blogData.title;
            blog.summary = blogData.summary;
            blog.post = blogData.post;
            blog.status = blogData.status;
            blog.category = blogData.category;
            blog.images = blogData.images;
            blog.datePosted = blogData.datePosted;

            blog.save(function(err) {
                if (err) {
                    return next(err);
                }

                res.send(blog);
            });
        });
    };

    exports.blogCount = function(req, res, next) {
        Blog.find({}).count().exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.status(200);
            res.send({count:collection});
        });
    };

    exports.blogCountCategory = function(req, res, next) {
        var cat = req.params.category;

        Blog.find({category:cat}).count().exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.status(200);
            res.send({count:collection});
        });
    };

    //get the most recent blog
    exports.topBlog = function(req, res, next)  {
        Blog.find({'datePosted': {$lte: new Date()}, 'status': 'Post'}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

})();