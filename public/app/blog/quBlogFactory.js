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

            var blogResourceCount = $resource('/api/blogCount');

            var blogResourcePaged = $resource('/api/blog/:page/:pageSize/page',
                {page:'@page',pageSize:'@pageSize',isArray:true}
            );

            //get an aggregate listing of the count of posts by category
            var blogCatCountResource = $resource('/api/blogCat/');

            var blogByCatResource = $resource('/api/blog/category/:category',
                {category: '@category', isArray:true}
            );

            var blogCatResourcePaged = $resource('/api/blog/category/:category/:page/:pageSize/page',
                {category: '@category', page:'@page',pageSize:'@pageSize',isArray:true}
            );

            return {
                blogResource: blogResource,
                blogCatCountResource: blogCatCountResource,
                blogByCatResource: blogByCatResource,
                blogResourcePaged: blogResourcePaged,
                blogCatResourcePaged: blogCatResourcePaged,
                blogResourceCount: blogResourceCount
            };
        }
    ]);
})();