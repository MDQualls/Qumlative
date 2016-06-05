(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('quDemo', {
        templateUrl: '/app/demo/quDemo.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();