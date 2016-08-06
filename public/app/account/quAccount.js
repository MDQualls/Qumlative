(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity) {
        var ctrl = this;

        ctrl.$onInit = function() {
            ctrl.currentUser = quIdentity.currentUser();
        };
    }

    module.component('quAccount', {
        templateUrl: '/app/account/quAccount.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity', controller]
    });

})();