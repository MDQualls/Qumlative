(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quUserFactory, extNotifierSvc) {
        /*jshint validthis: true */
        var ctrl = this;

        ctrl.doRegister = function(registration) {
            quUserFactory.UserResource.save(registration,
                function(response) {
                    extNotifierSvc.successMsg('New user registered for qumlative.io');
                    ctrl.$router.navigate(['Registered']);
                },
                function(err) {
                    extNotifierSvc.errorMsg('An error occurred during the user registration process.  Please refresh and try again.');
                    console.log(err);
                }
            );

        };

        ctrl.doCancel = function()  {
            ctrl.$router.navigate(['Home']);
        };
    }

    module.component('quRegister', {
        templateUrl: 'app/register/quRegister.html',
        controllerAs: 'ctrl',
        controller: ['quUserFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<',
            doRegister: '&'
        }
    });

})();