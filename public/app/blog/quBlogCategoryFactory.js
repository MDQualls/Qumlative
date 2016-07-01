(function() {
    'use strict';

    angular.module('app').factory('quBlogCategoryFactory',
    ['$resource',
    function($resource) {
        var blogCategoryResource = $resource('/api/blogCategory/:id',
            {id:'@id', isArray:true}
        );
        return blogCategoryResource;
    }]);
})();