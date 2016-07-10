(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {
        var ctrl = this;

        ctrl.showLoginForm = false;
        ctrl.username = '';
        ctrl.password = '';

        ctrl.toggleLogin = function() {
            ctrl.showLoginForm = (ctrl.showLoginForm) ? false : true;
        };

        ctrl.callParentLogin = function() {
            if (ctrl.extLoginForm.$valid === false) {
                return false;
            } else {
                //call parent scope to log into application
                ctrl.doLogin({'username': ctrl.username, 'password': ctrl.password});
                ctrl.showLoginForm = false;
            }
        };

        ctrl.callParentLogout = function() {
            ctrl.doLogOut();
            ctrl.showLoginForm = false;
            ctrl.username = '';
            ctrl.password = '';
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