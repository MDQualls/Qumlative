(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, extNotifierSvc, $filter) {
        /*jshint validthis: true */
        var ctrl = this;

        ctrl.$onInit = function() {
           quBlogFactory.maxResource.query(
               function(result) {
                    ctrl.post = $filter('quShortenBlog')(result)[0];
               },
               function(err) {
                   extNotifierSvc.errorMsg('An error occurred while loading the most recent blog post');
                   console.log(err);
                });
        };
    }

    module.component('quTopPost', {
        templateUrl: 'app/blog/quTopPost.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', 'extNotifierSvc', '$filter', controller]
    });

})();
