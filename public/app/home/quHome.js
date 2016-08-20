(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        var vm = this;
    }

    module.component('quHome', {
        templateUrl: 'app/home/quHome.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();