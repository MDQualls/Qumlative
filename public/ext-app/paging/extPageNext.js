(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.moreRecords = (ctrl.pageModel.page * ctrl.pageModel.pageSize) <= ctrl.pageModel.totalRecords;

        ctrl.callParentNavigate = function() {
            ctrl.doNavigateNext();
        };
    }

    module.component('extPageNext', {
        templateUrl: '/ext-app/paging/extPageNext.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            pageModel: '<',
            doNavigateNext: '&'
        }
    });

})();