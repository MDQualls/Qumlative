(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.callParentNavNext = function() {
            ctrl.doNavigateNext();
        };

        ctrl.callParentNavPrev = function() {
            ctrl.doNavigatePrev();
        };

        ctrl.$onChanges = function(changesObj) {
            if (changesObj.page !== undefined) {
                ctrl.isoPage = changesObj.page.currentValue;
            }
            if (changesObj.pageSize !== undefined) {
                ctrl.isoPageSize = changesObj.pageSize.currentValue;
            }
            if (changesObj.totalRecords !== undefined) {
                ctrl.isoTotalRecords = changesObj.totalRecords.currentValue;
            }
            ctrl.moreRecords = (parseFloat(ctrl.isoPage * ctrl.isoPageSize) < parseFloat(ctrl.isoTotalRecords)) ? true : false;
            ctrl.prevRecords = (ctrl.isoPage > 1) ? true : false;
            ctrl.isoPages = (ctrl.isoTotalRecords / ctrl.isoPageSize > 1) ? ctrl.isoTotalRecords / ctrl.isoPageSize : 1;
        };
    }

    module.component('extPager', {
        templateUrl: 'ext-app/paging/extPager.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            page: '<',
            pageSize: '<',
            totalRecords: '<',
            doNavigateNext: '&',
            doNavigatePrev: '&'
        }
    });

})();