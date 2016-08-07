
(function() {
  'use strict';
  angular.module('app').factory('quUserFactory', function($resource) {

    var UserResource = $resource('/api/users/:id', {id: '@id', isArray:true},
      {update: {method:'PUT',isArray:false}
    });

    var BanResource = $resource('/api/ban/:id', {id: '@id', isArray:true});

    var SuspendResource = $resource('/api/suspend/:id', {id: '@id', isArray:true});

    var PasswordResource = $resource('/api/password/:id', {id: '@id', isArray:true},
      {update: {id: '@id', method:'PUT',isArray:false}
    });

    return {
      UserResource: UserResource,
      BanResource: BanResource,
      SuspendResource: SuspendResource,
      PasswordResource: PasswordResource
    };
  });
})();
