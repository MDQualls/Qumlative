(function() {
    'use strict';

    var Blog = require('mongoose').model('Blog');

    exports.getAggregateCount = function(req, res, next) {
        Blog.aggregate([{$group: {_id: '$category',total:{$sum: 1}}}])
            .sort({_id: 1})
            .exec(function(err, collection) {
                if (err) {
                    if (err) {return next(err);}
                }
                res.send(collection);
            });
        };
})();