(function() {

  angular.module('app').factory('quAuth',
    ['$http', 'quIdentity', '$q',
      function($http, quIdentity, $q) {
        return{
          authenticateUser: function(username, password) {
            var defer = $q.defer();
            $http.post('/login', {username: username, password: password})
              .then(function(response)  {
                if (response.data.success) {
                  quIdentity.setCurrentUser(response.data.user);
                  defer.resolve(true);
                } else {
                  defer.resolve(false);
                }
              }, function(err) { console.log(err)});
              return defer.promise;
          },
          logoutUser: function()  {
            var defer = $q.defer();
            $http.post('/logout', {logout:true})
              .then(function()  {
                quIdentity.setCurrentUser(undefined);
                defer.resolve();
              });
              return defer.promise;
          },
          authorizeCurrentUserForRoute: function(role) {
            if (quIdentity.isAuthorized(role)) {
              return true;
            } else {
              return $q.reject('not authorized');
            }

          }
        };
    }
  ]);
})();
