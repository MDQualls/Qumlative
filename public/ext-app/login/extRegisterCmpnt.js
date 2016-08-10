(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {
        var ctrl = this;

        ctrl.reset = function() {
            ctrl.registration = {firstName:'',lastName:'',username:'',emailAddress:'',password:'',passwordRepeat:''};
        };

        ctrl.callParentRegister = function() {
            if (ctrl.frmRegister.$valid === false) {
                return false;
            } else {
                //call parent scope to log into application
                ctrl.doRegister({'registration': ctrl.registration});
            }
        };

        ctrl.callParentCancel = function() {
            ctrl.doCancel();
        };

        ctrl.$onInit = function() {
            ctrl.reset();
        };
    }

    module.component('extRegister', {
        templateUrl: '/ext-app/login/extRegister.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            doRegister: '&',
            doCancel: '&',
        }
    });

})();