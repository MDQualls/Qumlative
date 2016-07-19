(function() {
    'use strict';
    //$resource(url, [paramDefaults], [actions], options);
    angular.module('app').factory('quBlogFactory',
        ['$resource',
        function($resource) {

            var blogResource = $resource('/api/blog/:id',
                {id:'@id', isArray:true},
                {update: {method: 'PUT'}}
            );

            //get an aggregate listing of the count of posts by category
            var blogCatResource = $resource('/api/blogCat/');

            return {
                blogResource: blogResource,
                blogCatResource: blogCatResource
            };
        }
    ]);
})();