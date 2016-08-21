(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, extNotifierSvc, quAuth) {
        /*jshint validthis: true */
        var ctrl = this;

        ctrl.identity = quIdentity;

        ctrl.signin = function(username, password)  {
          quAuth.authenticateUser(username, password)
            .then(function(response) {
              if (response.data.success === true) {
                extNotifierSvc.successMsg('You have successfully signed in!');
                ctrl.$router.navigate(['Admin']);
              } else {
                extNotifierSvc.warningMsg(response.data.reason);
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