
(function() {
  'use strict';
  angular.module('app').factory('quUserFactory', function($resource) {

    var UserResource = $resource('/api/users/:id', {id: '@id', isArray:true});

    var BanResource = $resource('/api/ban/:id', {id: '@id', isArray:true});

    var SuspendResource = $resource('/api/suspend/:id', {id: '@id', isArray:true});

    return {
      UserResource: UserResource,
      BanResource: BanResource,
      SuspendResource: SuspendResource
    };
  });
})();
