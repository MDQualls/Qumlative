(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory) {
        /*jshint validthis: true */
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {

            //set the back button ... to previous page if defined; otherwise to blog page
            if (previous === undefined)  {
                ctrl.back = 'blog';
            } else {
                ctrl.back = previous.urlPath;
            }

            if (next.params.id !== undefined) {
                ctrl.id = next.params.id;
                ctrl.blogPost = quBlogFactory.blogResource.get({id:ctrl.id});
            }
        };
    }

    module.component('quBlogPost', {
        templateUrl: 'app/blog/quBlogPost.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', controller],
    });

})();