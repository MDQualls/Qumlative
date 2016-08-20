(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, extNotifierSvc, quUserFactory) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.currentUser())  {
                extNotifierSvc.warningMsg('You are not currently logged in.');
                ctrl.$router.navigate(['Home']);
            }
        };

        ctrl.$onInit = function() {
            ctrl.currentUser = quIdentity.currentUser();
        };

        ctrl.doCancel = function()  {
            ctrl.$router.navigate(['Home']);
        };

        ctrl.updateUserPassword = function(passwordUpdate) {
            quUserFactory.PasswordResource.update({id:ctrl.currentUser._id}, passwordUpdate.password,
                function(response) {
                    extNotifierSvc.successMsg('Password successfully updated');
                    ctrl.$router.navigate(['Home']);
                },
                function(err) {
                    extNotifierSvc.errorMsg('An error occurred during password update.  Please refresh and try again.');
                });
        };
    }

    module.component('quAccount', {
        templateUrl: 'app/account/quAccount.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity', 'extNotifierSvc', 'quUserFactory', controller],
        bindings: {
            '$router': '<'
        }
    });

})();