(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('quBlog', {
        templateUrl: '/app/blog/quBlog.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();