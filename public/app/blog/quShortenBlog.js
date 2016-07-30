(function() {
    'use strict';
    var module = angular.module('app');

    function shorten(val)  {
            var matches = val.match('^<p>(.*?)</p><p>(.*?)</p>');

            if (matches !== null)  {
                return matches[0];
            } else {
                return val;
            }
    }

    module.filter('quShortenBlog', function() {

        return function (values)  {
            var blogs = [];
            var post = {};
            angular.forEach(values, function(v, k) {
                post._id = v._id;
                post.title = v.title;
                post.datePosted = v.datePosted;
                post.summary = v.summary;
                post.category = v.category;
                post.post = shorten(v.post);
                blogs.push(post);
                post = {};
            });
            return blogs;
        }
    });
})();