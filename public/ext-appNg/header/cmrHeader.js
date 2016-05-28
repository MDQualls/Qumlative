(function() {
    'use strict';

    var module = angular.module('cmrHeaderModule');

    function controller() {

    }

    module.component('cmrHeader', {
        templateUrl: '/ext-appNg/header/cmrHeader.html',
        bindings: {
            logoSrc: '<',
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();