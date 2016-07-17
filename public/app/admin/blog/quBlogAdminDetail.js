(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, quBlogStatusFactory, $uibModal, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogCategories = [];
        ctrl.blogStatuses = [];
        ctrl.blogSchema = {title: '',summary: '',post: '',datePosted: '',status: '',category: '',images: []};
        ctrl.id = 0;

        ctrl.updateBlogs = function () {

            if (ctrl.frmBlog.$valid === false) {
                return false;
            } else {

                if (ctrl.id === 0)  {
                    quBlogFactory.save(ctrl.blogSchema, function(result) {
                        extNotifierSvc.successMsg('New blog successfully posted');
                        ctrl.$router.navigate(['BlogAdmin']);
                    },
                    function (error) {
                        extNotifierSvc.errorMsg(error);
                        console.log(error);
                    });
                } else {
                    quBlogFactory.update(ctrl.blogSchema, function(result) {
                        extNotifierSvc.successMsg('Blog has been successfully updated');
                        ctrl.$router.navigate(['BlogAdmin']);
                    },
                    function (error) {
                        extNotifierSvc.errorMsg(error);
                        console.log(error);
                    });
                }
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

        ctrl.$routerOnActivate = function(next, previous) {
            ctrl.id = next.params.id;
            ctrl.blogSchema = quBlogFactory.get({id:ctrl.id});
        };

        ctrl.$onInit = function() {
            ctrl.blogCategories = quBlogCategoryFactory.query();
            ctrl.blogStatuses = quBlogStatusFactory.query();
        };
    }

    module.component('quBlogAdminDetail', {
        templateUrl: '/app/admin/blog/quBlogAdminDetail.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', 'quBlogCategoryFactory', 'quBlogStatusFactory', '$uibModal', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();