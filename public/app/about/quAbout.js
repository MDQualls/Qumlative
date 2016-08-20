(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('quAbout', {
        templateUrl: 'app/about/quAbout.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });
})();