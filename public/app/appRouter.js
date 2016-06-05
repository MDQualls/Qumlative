(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('appRouter', {
        templateUrl: '/app',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();