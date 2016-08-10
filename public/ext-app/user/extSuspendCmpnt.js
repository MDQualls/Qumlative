(function() {
    'use strict';

    var module = angular.module('extUserModule');

    function controller() {

    }

    module.component('extSuspend', {
        templateUrl: '/ext-app/user/extSuspend.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            currentStatus: '<',
            setStatus: '&'
        }
    });

})();