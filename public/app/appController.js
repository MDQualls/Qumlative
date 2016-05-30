(function() {
    'use strict';

    var module = angular.module('app');

    function controller(menuFactory) {
        var ctrl = this;

        ctrl.$onInit = function()  {
            ctrl.heading = 'Qumlative';
            //ctrl.brand = 'Demo Site of Michael Qualls';
            ctrl.menuItems = menuFactory.query({memberOfMenu: 'topMain'});
        };
    }

    module.component('appController', {
        templateUrl: '/app/appContent.html',
        transclude: true,
        controllerAs: 'ctrl',
        controller: ['menuFactory', controller]
    });

})();