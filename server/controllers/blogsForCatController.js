(function() {
    'use strict';

    var Blog = require('mongoose').model('Blog');

    exports.getBlogs = function(req, res, next)  {
        var category = decodeURI(req.params.category);

        console.log(category);

        Blog.find({category:category}).exec(function(err, collection) {

            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    };
})();