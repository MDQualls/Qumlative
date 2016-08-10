(function() {
    'use strict';
    var module = angular.module('extUtilModule');

    module.filter('extUtcDateFilter',['$filter', function ($filter) {
        return function (dateValue) {
            var tmpDate = new Date(dateValue);
            var formatted = tmpDate.getUTCFullYear() + '-' + (tmpDate.getUTCMonth() + 1) + '-' + tmpDate.getUTCDate();
            return new Date(formatted);
        };
    }]);
})();