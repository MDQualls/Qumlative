(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogCategoryFactory, quBlogStatusFactory, $uibModal, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogCategories = [];
        ctrl.blogStatuses = [];

        ctrl.postNewBlog = function() {};
        ctrl.returnToAdmin = function() {
            ctrl.$router.navigate(['BlogAdmin']);
        };

        //control the modal for the new category form
        ctrl.openCategoryModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/app/admin/blog/quAdminCategoryDetail.html',
                controller: 'quAdminCategoryController as ctrl',
            }).result.then(function (result) {
                ctrl.blogCategories.push(result);
            }, function (error) {
                console.log(error);
                extNotifierSvc.errorMsg(error);
            });
        };

        ctrl.$onInit = function() {
            ctrl.blogCategories = quBlogCategoryFactory.query();
            ctrl.blogStatuses = quBlogStatusFactory.query();
        };
    }

    module.component('quNewBlogAdmin', {
        templateUrl: '/app/admin/blog/quNewBlogAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quBlogCategoryFactory', 'quBlogStatusFactory', '$uibModal', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();