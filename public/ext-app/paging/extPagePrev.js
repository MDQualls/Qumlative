(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.prevRecords = (ctrl.pageModel.page > 1);

        ctrl.callParentNavigate = function() {
            ctrl.doNavigatePrev();
        };
    }

    module.component('extPagePrev', {
        templateUrl: '/ext-app/paging/extPagePrev.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            pageModel: '<',
            doNavigatePrev: '&'
        }
    });
})();