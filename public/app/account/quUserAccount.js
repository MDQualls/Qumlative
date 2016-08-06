(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        var ctrl = this;

        ctrl.$onInit = function()  {
            console.log('inside user account component');
            console.log(ctrl.user);
        };
    }

    module.component('quUserAccount', {
        templateUrl: '/app/account/quUserAccount.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            user: '<'
        }
    });

})();