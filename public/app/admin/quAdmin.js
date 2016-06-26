(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, quAuth, extNotifierSvc) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.isAdmin())  {
                ctrl.$router.navigate(['AdminLogin']);
            }
        };

        ctrl.adminLogOut = function()  {
            quAuth.logoutUser()
            .then(function() {
                extNotifierSvc.successMsg('You have successfully logged out!');
                ctrl.$router.navigate(['Home']);
              },function(err)  {
                extNotifierSvc.warningMsg('An error occurred while logging out.');
            });
        }
    }

    module.component('quAdmin', {
        templateUrl: '/app/admin/quAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity', 'quAuth', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();