(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        var ctrl = this;

        ctrl.heading = 'Qumlative';
    }

    module.component('appController', {
        templateUrl: '/app/appContent.html',
        transclude: true,
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();