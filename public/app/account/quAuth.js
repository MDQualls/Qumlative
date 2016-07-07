(function () {

  angular.module('app').factory('quAuth',
    ['$http', 'quIdentity', '$q',
      function ($http, quIdentity, $q) {
        return {
          authenticateUser: function (username, password) {
            var defer = $q.defer();
            $http.post('/login', {username: username, password: password})
              .then(function (response) {
                if (response.data.success === true) {
                  quIdentity.setCurrentUser(response.data.user);
                }
                defer.resolve(response);
              }, function (err) {
                defer.reject(err);
            });
            return defer.promise;
          },
          logoutUser: function () {
            var defer = $q.defer();
            $http.post('/logout', {logout: true})
              .then(function () {
                quIdentity.setCurrentUser(undefined);
                defer.resolve();
              });
            return defer.promise;
          },
          authorizeCurrentUserForRoute: function (role) {
            if (quIdentity.isAuthorized(role)) {
              return true;
            } else {
              return $q.reject('not authorized');
            }

          },
          authorizeAuthenticatedUserForRoute: function () {
            if (quIdentity.isAuthenticated()) {
              return true;
            } else {
              return $q.reject('not authorized');
            }
          }
        };
      }
    ]);
})();
