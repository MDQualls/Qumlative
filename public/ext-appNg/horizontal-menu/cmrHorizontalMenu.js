(function() {
    'use strict';

    var module = angular.module('cmrHorizontalMenuModule');

    function controller() {

    }

    module.component('cmrHorizontalMenu', {
        templateUrl:'/ext-appNg/horizontal-menu/cmrHorizontalMenu.html',
        bindings: {
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();