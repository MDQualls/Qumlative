(function() {

  angular.module('app').factory('quIdentity',
    [ "$sessionStorage",
    function($sessionStorage) {

      return {
        setCurrentUser: function(user)  {
          $sessionStorage.currentUser = user;
        },
        currentUser: function() {
          return $sessionStorage.currentUser;
        },
        isAuthenticated: function() {
          return !!$sessionStorage.currentUser;
        },
        isAuthorized: function(role) {
          return !!$sessionStorage.currentUser && $sessionStorage.currentUser.roles.indexOf(role) > -1;
        },
        isAdmin: function() {
          if($sessionStorage.currentUser === undefined)
          {
            return false;
          }
          return $sessionStorage.currentUser.roles && $sessionStorage.currentUser.roles.indexOf('admin') > -1;
        }
      }
    }]);
})()
