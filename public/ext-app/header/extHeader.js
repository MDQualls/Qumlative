(function() {
    'use strict';

    var module = angular.module('extHeaderModule');

    function controller() {

    }

    module.component('extHeader', {
        templateUrl: '/ext-app/header/extHeader.html',
        bindings: {
            logoSrc: '<',
            menuItems: '<',
            heading: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();