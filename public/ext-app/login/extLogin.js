(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {
        var ctrl = this;

        ctrl.showLoginForm = false;
        ctrl.username = '';
        ctrl.password = '';

        function reset() {
            ctrl.showLoginForm = false;
            ctrl.username = '';
            ctrl.password = '';
        }

        ctrl.toggleLogin = function() {
            if (ctrl.showLoginForm === true) {
                reset();
            } else {
                ctrl.showLoginForm = true;
            }
        };

        ctrl.callParentLogin = function() {
            if (ctrl.extLoginForm.$valid === false) {
                return false;
            } else {
                //call parent scope to log into application
                ctrl.doLogin({'username': ctrl.username, 'password': ctrl.password});
                reset();
            }
        };

        ctrl.callParentLogout = function() {
            ctrl.doLogOut();
            reset();
        };

        ctrl.isAdmin = function()  {
            return ctrl.user.roles && ctrl.user.roles.indexOf('admin') > -1;
        }
    }

    module.component('extLogin', {
        templateUrl: '/ext-app/login/extLogin.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            user: '=',
            doLogin: '&',
            doLogOut: '&'
        }
    });

})();