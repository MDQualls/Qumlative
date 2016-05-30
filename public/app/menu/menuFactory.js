(function() {
    'use strict';
    //$resource(url, [paramDefaults], [actions], options);
    angular.module('app').factory('menuFactory',
        ['$resource',
        function($resource) {
            var menuResource = $resource('/api/menu/:memberOfMenu', {memberOfMenu:'@memberOfMenu', isArray:true});
            return menuResource;
        }
    ]);
})();