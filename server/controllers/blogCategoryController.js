(function() {
    'use strict';

    var BlogCategory = require('mongoose').model('BlogCategory');
    var sanitize = require('mongo-sanitize');

    exports.getBlogCategories = function(req, res, next)  {

        BlogCategory.find({}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.getBlogCategory = function(req, res, next)  {
        var id = sanitize(req.params.id);

        if (id === undefined)  {
            res.status(400);
            return res.send({reason:'id is a required parameter'});
        }

        BlogCategory.findById({_id: id}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.createBlogCategory = function(req, res, next) {
        var blogCategoryData = sanitize(req.body);
        BlogCategory.create(blogCategoryData, function(err, category) {
            if (err) {
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.send(category);
        });
    };

    exports.updateBlogCategory = function(req, res, next) {
        var id = sanitize(req.params.id);
        var blogCategoryData = sanitize(req.body);

        BlogCategory.findById({_id:id}, function(err, category)  {
            if (err) {
                return next(err);
            }

            category.category = blogCategoryData.category;
            category.description = blogCategoryData.description;

            category.save(function(err) {
                if (err) {
                    return next(err);
                }

                res.send(category);
            });
        });
    };

})();