(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {

    }

    module.component('extRegister', {
        templateUrl: '/ext-app/login/extRegister.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();