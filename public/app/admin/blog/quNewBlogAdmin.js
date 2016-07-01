(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogCategoryFactory, quBlogStatusFactory) {
        var ctrl = this;

        ctrl.blogCategories = [];
        ctrl.blogStatuses = [];

        ctrl.postNewBlog = function() {};
        ctrl.returnToAdmin = function() {
            ctrl.$router.navigate(['BlogAdmin']);
        };

        ctrl.$onInit = function() {
            ctrl.blogCategories = quBlogCategoryFactory.query();
            ctrl.blogStatuses = quBlogStatusFactory.query();

            console.log(ctrl.blogCategories);
            console.log(ctrl.blogStatuses);
        };
    }

    module.component('quNewBlogAdmin', {
        templateUrl: '/app/admin/blog/quNewBlogAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quBlogCategoryFactory', 'quBlogStatusFactory', controller],
        bindings: {
            '$router': '<'
        }
    });

})();