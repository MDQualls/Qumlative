(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, extNotifierSvc, quAuth) {
        var ctrl = this;

        ctrl.identity = quIdentity;

        ctrl.signin = function(username, password)  {
          quAuth.authenticateUser(username, password)
            .then(function(success) {
              if (success) {
                extNotifierSvc.successMsg('You have successfully signed in!');
                ctrl.$router.navigate(['Admin']);
              } else {
                extNotifierSvc.warningMsg('Username/Password combination incorrect');
              }
            });
        };

        ctrl.signout = function()  {
          quAuth.logoutUser().then(function() {
            ctrl.username = '';
            ctrl.password = '';
            extNotifierSvc.successMsg('You have successfully signed out!');
            ctrl.$router.navigate(['Home']);
          });
        };
    }

    module.component('quLogin', {
        templateUrl: '/app/admin/quLogin.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity', 'extNotifierSvc', 'quAuth', controller],
        bindings: {
            '$router': '<'
        }
    });

})();