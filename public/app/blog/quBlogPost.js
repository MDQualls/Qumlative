(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {
            if (next.params.id !== undefined) {
                ctrl.id = next.params.id;
                ctrl.blogPost = quBlogFactory.blogResource.get({id:ctrl.id});
            }
        };
    }

    module.component('quBlogPost', {
        templateUrl: '/app/blog/quBlogPost.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', controller],
    });

})();