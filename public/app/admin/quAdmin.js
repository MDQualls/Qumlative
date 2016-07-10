(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, quAuth, extNotifierSvc) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.isAdmin())  {
                extNotifierSvc.warningMsg('You are not authenicated for that route.');
                ctrl.$router.navigate(['Home']);
            }
        };

        ctrl.adminLogOut = function()  {
            quAuth.logoutUser()
            .then(function() {
                extNotifierSvc.successMsg('You have successfully logged out!');
                ctrl.$router.navigate(['BlogAdmin']);
              },function(err)  {
                extNotifierSvc.warningMsg('An error occurred while logging out.');
            });
        };
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