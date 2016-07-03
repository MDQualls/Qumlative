(function() {
    'use strict';
    angular.module('app').controller('quAdminCategoryController',
        ['$uibModalInstance', 'quBlogCategoryFactory',
        function ($uibModalInstance, quBlogCategoryFactory) {
            var ctrl = this;

            ctrl.category = {'category':'','description':''};

            ctrl.ok = function () {

                console.log('SUBMITTED!!!');

                if (ctrl.frmBlogCategory.$valid === false) {
                    return false;
                } else {

                    quBlogCategoryFactory.save(ctrl.category, function(result) {
                        $uibModalInstance.close(result);
                    },
                    function (error) {
                        console.log(error);
                    });
                }
            };

            ctrl.cancel = function () {

                console.log('DISMISS!');

                $uibModalInstance.dismiss('cancel');
            };
    }]);
})();