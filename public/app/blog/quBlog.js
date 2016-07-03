(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogs = [];
        ctrl.categories = [];

        ctrl.$onInit = function()  {
            quBlogFactory.query(function(result) {
                ctrl.blogs = result;
                quBlogCategoryFactory.query(function(cats) {
                    ctrl.categories = cats;
                });
            },
            function (error) {
                extNotifierSvc.errorMsg(error);
                console.log(error);
            });
        }
    }

    module.component('quBlog', {
        templateUrl: '/app/blog/quBlog.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory','quBlogCategoryFactory', 'extNotifierSvc', controller]
    });

})();