(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quUserFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.doRegister = function(registration) {
            quUserFactory.UserResource.save(registration,
                function(response) {
                    extNotifierSvc.successMsg('New user registered for qumlative.io');
                    ctrl.$router.navigate(['Home']);
                },
                function(err) {
                    extNotifierSvc.errorMsg('An error occurred during the user registration process.  Please refresh and try again.');
                }
            );

        };

        ctrl.doCancel = function()  {
            ctrl.$router.navigate(['Home']);
        };
    }

    module.component('quRegister', {
        templateUrl: '/app/register/quRegister.html',
        controllerAs: 'ctrl',
        controller: ['quUserFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<',
            doRegister: '&'
        }
    });

})();