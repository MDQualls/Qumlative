(function() {
    'use strict';

    var module = angular.module('extUserModule');

    function controller() {

    }

    module.component('extBan', {
        templateUrl: 'ext-app/user/extBan.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            currentStatus: '<',
            setStatus: '&'
        }
    });

})();