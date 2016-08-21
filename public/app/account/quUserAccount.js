(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        /*jshint validthis: true */
        var ctrl = this;

        ctrl.$onInit = function()  {
            console.log('inside user account component');
            console.log(ctrl.user);
        };

        ctrl.callParentCancel = function()  {
            ctrl.doCancel();
        };

        ctrl.callParentUpdPassword = function()  {
            if (ctrl.frmPasswordUpd.$valid === false) {
                return false;
            } else {
                //call parent scope to update password
                ctrl.doPasswordUpdate({'passwordUpdate': ctrl.passwordUpdate});
            }
        };
    }

    module.component('quUserAccount', {
        templateUrl: 'app/account/quUserAccount.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            user: '<',
            doCancel: '&',
            doPasswordUpdate: '&'
        }
    });

})();