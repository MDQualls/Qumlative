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
            return blogResource;
        }
    ]);
})();