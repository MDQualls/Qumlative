(function() {
    'use strict';

    var module = angular.module('extFooterModule');

    function controller() {

    }

    module.component('extFooter', {
        templateUrl: 'ext-app/footer/extFooter.html',
        controllerAs: 'ctrl',
        transclude: true,
        controller: [controller]
    });

})();
