(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogs = [];
        ctrl.categories = [];
        ctrl.catCounts = [];
        ctrl.title = 'Recent Blog Posts';

        ctrl.$routerOnActivate = function(next, previous) {
            if (next.params.category !== undefined)  {
                quBlogFactory.blogByCatResource.query({category:next.params.category}, function(result) {
                    ctrl.blogs = result;
                    ctrl.title = '"' + decodeURI(next.params.category) + '" Category Posts';
                }, function (error) { extNotifierSvc.errorMsg(error); console.log(error); });
            } else {
                if (next.params.id !== undefined) {
                    ctrl.blogs = quBlogFactory.blogResource.get({id:next.params.id}, function() {});
                    ctrl.title = '"' + decodeURI(ctrl.blogs[0].title) + '" blog Post';
                } else {
                    quBlogFactory.blogResource.query(function(result) {
                        ctrl.blogs = result;
                    }, function (error) { extNotifierSvc.errorMsg(error); console.log(error); });
                }
            }
        };

        ctrl.$onInit = function()  {
            quBlogFactory.blogCatCountResource.query(function(result) {
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
        controller: ['quBlogFactory','quBlogCategoryFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();