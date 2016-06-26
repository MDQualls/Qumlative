
(function() {
  'use strict';
  angular.module('app').factory('quUserRsc', function($resource) {

    var UserResource = $resource('/api/users/:id', {_id: '@id'});

    return UserResource;
  });
})();
