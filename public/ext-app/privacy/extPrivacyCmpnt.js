(function() {
    'use strict';

    var module = angular.module('extPrivacyModule');

    function controller() {

    }

    module.component('extPrivacy', {
        templateUrl: 'ext-app/privacy/extPrivacy.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();