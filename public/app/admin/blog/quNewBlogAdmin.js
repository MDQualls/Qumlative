(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, quBlogStatusFactory, $uibModal, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogCategories = [];
        ctrl.blogStatuses = [];
        ctrl.blogSchema = {title: '',summary: '',post: '',datePosted: '',status: '',category: '',images: []};

        ctrl.postNewBlog = function () {

            if (ctrl.frmBlog.$valid === false) {
                return false;
            } else {

                quBlogFactory.save(ctrl.blogSchema, function(result) {
                    extNotifierSvc.successMsg('New blog successfully posted');
                    ctrl.$router.navigate(['BlogAdmin']);
                },
                function (error) {
                    extNotifierSvc.errorMsg(error);
                    console.log(error);
                });
            }
        };

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
        controller: ['quBlogFactory', 'quBlogCategoryFactory', 'quBlogStatusFactory', '$uibModal', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();