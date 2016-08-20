(function() {
    'use strict';

    var module = angular.module('extHorizontalMenuModule');

    function controller() {

    }

    module.component('extHorizontalMenu', {
        templateUrl:'ext-app/horizontal-menu/extHorizontalMenu.html',
        bindings: {
            brand: '<',
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();