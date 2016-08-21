(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        /*jshint validthis: true */
        var ctrl = this;

        ctrl.prevButtonEnabled = function() {
            ctrl.prevRecords = (ctrl.pageModel.page > 1);
        };

        ctrl.callParentNavigate = function() {
            ctrl.prevButtonEnabled();
            ctrl.doNavigatePrev();
        };

        ctrl.$onInit = function() {
            ctrl.prevButtonEnabled();
        };
    }

    module.component('extPagePrev', {
        templateUrl: 'ext-app/paging/extPagePrev.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            pageModel: '<',
            doNavigatePrev: '&'
        }
    });
})();