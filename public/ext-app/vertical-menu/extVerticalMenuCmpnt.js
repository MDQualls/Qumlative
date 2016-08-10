(function() {
    'use strict';

    var module = angular.module('extVerticalMenuModule');

    function controller() {

    }

    module.component('extVerticalMenu', {
        templateUrl: '/ext-app/vertical-menu/extVerticalMenu.html',
        bindings: {
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();