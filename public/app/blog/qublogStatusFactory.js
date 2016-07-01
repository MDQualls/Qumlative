(function() {
    'use strict';

    angular.module('app').factory('quBlogStatusFactory',
    ['$resource',
    function($resource) {
        var blogStatusResource = $resource('/api/blogStatus/:id',
            {id:'@id', isArray:true}
        );
        return blogStatusResource;
    }]);
})();