(function() {
    'use strict';

    var Blog = require('mongoose').model('Blog');

    exports.getBlogs = function(req, res, next)  {
        var category = decodeURI(req.params.category);

        Blog.find({category:category}).exec(function(err, collection) {

            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };

    exports.getBlogsByPage = function(req, res, next)  {
        var category = decodeURI(req.params.category);
        var page = parseFloat(req.params.page);
        var pageSize = parseFloat(req.params.pageSize);

        Blog.find({category:category}).skip((page * pageSize) - pageSize).limit(pageSize).exec(function(err, collection) {

            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };
})();