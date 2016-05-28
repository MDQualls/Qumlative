(function() {
    'use strict';

    var module = angular.module('cmrVerticalMenuModule');

    function controller() {

    }

    module.component('cmrVerticalMenu', {
        templateUrl: '/ext-appNg/vertical-menu/cmrVerticalMenu.html',
        bindings: {
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();