(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        var ctrl = this;

        ctrl.postNewBlog = function() {

        };
        ctrl.returnToAdmin = function() {
            ctrl.$router.navigate(['BlogAdmin']);
        };
    }

    module.component('quNewBlogAdmin', {
        templateUrl: '/app/admin/blog/quNewBlogAdmin.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            '$router': '<'
        }
    });

})();