(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('quEditBlogAdmin', {
        templateUrl: '/app/admin/blog/editBlogAdmin.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();