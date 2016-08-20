(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {

    }

    module.component('extRegisterConfirm', {
        templateUrl: 'ext-app/login/extRegisterConfirm.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();