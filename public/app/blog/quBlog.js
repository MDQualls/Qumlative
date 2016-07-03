(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogs = [];

        ctrl.$onInit = function()  {
            quBlogFactory.query(function(result) {
                ctrl.blogs = result;
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
        controller: ['quBlogFactory','extNotifierSvc', controller]
    });

})();