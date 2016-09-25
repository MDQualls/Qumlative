(function() {
    'use strict';

    var Blog = require('mongoose').model('Blog');
    var sanitize = require('mongo-sanitize');

    exports.getBlogs = function(req, res, next)  {
        var category = sanitize(decodeURI(req.params.category));

        Blog.find({category:category}).exec(function(err, collection) {

            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.getBlogsByPage = function(req, res, next)  {
        var category = sanitize(decodeURI(req.params.category));
        var page = sanitize(parseFloat(req.params.page));
        var pageSize = sanitize(parseFloat(req.params.pageSize));

        Blog.find({category:category}).skip((page * pageSize) - pageSize).limit(pageSize).exec(function(err, collection) {

            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };
})();