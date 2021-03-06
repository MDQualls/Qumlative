(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quUserFactory,extNotifierSvc) {
        /*jshint validthis: true */
        var ctrl = this;
        ctrl.users = [];

        ctrl.returnToAdmin = function() {
            ctrl.$router.navigate(['Admin']);
        };

        ctrl.setBanStatus = function(user, ban)  {
            if (ban === 1) {
                user.banned = 1;
            } else {
                user.banned = 0;
            }
            quUserFactory.BanResource.query({id:user._id},
                function(result) {
                    extNotifierSvc.successMsg('User successfully banned');
                },
                function(err) {
                    extNotifierSvc.errorMsg(err);
                });
            console.log(user.banned);
        };

        ctrl.setSuspendStatus = function(user, suspend) {
            if (suspend === 1) {
                user.suspended = 1;
            } else {
                user.suspended = 0;
            }
            quUserFactory.SuspendResource.query({id:user._id},
                function(result) {
                    extNotifierSvc.successMsg('User successfully Suspended');
                },
                function(err) {
                    extNotifierSvc.errorMsg(err);
                });
            console.log(user.suspended);
        };

        ctrl.$onInit = function() {
            quUserFactory.UserResource.query(
                function(result) {
                    ctrl.users = result;
                },
                function(err) {
                    extNotifierSvc.errorMsg(err);
                    console.log(err);
                });
        };
    }

    module.component('quUserAdmin', {
        templateUrl: 'app/admin/user/quUserAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quUserFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();