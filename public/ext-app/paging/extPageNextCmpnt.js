(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.nextButtonEnabled = function()  {
            ctrl.moreRecords = (ctrl.pageModel.page * ctrl.pageModel.pageSize) <= ctrl.pageModel.totalRecords;
        };

        ctrl.callParentNavigate = function() {
            ctrl.nextButtonEnabled();
            ctrl.doNavigateNext();
        };

        ctrl.$onInit = function() {
            ctrl.nextButtonEnabled();
        };
    }

    module.component('extPageNext', {
        templateUrl: 'ext-app/paging/extPageNext.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            pageModel: '<',
            doNavigateNext: '&'
        }
    });

})();