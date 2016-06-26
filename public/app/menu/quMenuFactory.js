(function() {
    'use strict';
    //$resource(url, [paramDefaults], [actions], options);
    angular.module('app').factory('quMenuFactory',
        ['$resource',
        function($resource) {
            var menuResource = $resource('/api/menu/:memberOfMenu', {memberOfMenu:'@memberOfMenu', isArray:true});
            return menuResource;
        }
    ]);
})();