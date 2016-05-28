(function() {
    'use strict';

    var module = angular.module('extHorizontalMenuModule');

    function controller() {

    }

    module.component('extHorizontalMenu', {
        templateUrl:'/ext-app/horizontal-menu/extHorizontalMenu.html',
        bindings: {
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();