(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogs = [];
        ctrl.categories = [];
        ctrl.catCounts = [];

        ctrl.$onInit = function()  {
            quBlogFactory.blogResource.query(function(result) {
                ctrl.blogs = result;
            },
            function (error) {
                extNotifierSvc.errorMsg(error);
                console.log(error);
            });
            quBlogFactory.blogCatResource.query(function(result) {
                ctrl.catCounts = result;
            },
            function(error) {
                extNotifierSvc.errorMsg(error);
                console.log(error);
            });
        };
    }

    module.component('quBlog', {
        templateUrl: '/app/blog/quBlog.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory','quBlogCategoryFactory', 'extNotifierSvc', controller]
    });

})();