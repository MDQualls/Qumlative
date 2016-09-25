(function() {
    'use strict';
    angular.module('app').factory('quCommentFactory',
    ['$resource',
    function($resource) {
        var commentResource = $resource('/api/comment/:id',
            {id:'@id', isArray:true}
        );
        var commentForResource = $resource('/api/comment/:forId/for',
            {forId:'@forId', isArray:true}
        );
        var commentForUser = $resource('api/comment/:id/:username',
            {id:'@id',username:'@username'},
            {update: {method: 'PUT'}}
        );

        return {
            commentResource: commentResource,
            commentForResource: commentForResource,
            commentForUser: commentForUser
        };
    }]);
})();