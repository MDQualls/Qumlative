(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, quBlogFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogs = [];

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.isAdmin())  {
                ctrl.$router.navigate(['Home']);
            }
        };

        ctrl.$onInit = function()  {
            ctrl.blogs = quBlogFactory.blogResource.query();
        };

        ctrl.returnToAdmin = function()  {
            ctrl.$router.navigate(['Admin']);
        };

        ctrl.newBlogPost = function() {
            ctrl.$router.navigate(['NewBlog']);
        };
    }

    module.component('quBlogAdmin', {
        templateUrl: '/app/admin/blog/quBlogAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity','quBlogFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();