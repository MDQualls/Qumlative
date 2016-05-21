(function() {

  angular.module('app').factory('quAuth',
    [ '$http', 'quIdentity', '$q',
      function($http, quIdentity, $q) {
        return{
          authenticateUser: function(username, password) {
            var defer = $q.defer();
            $http.post('/login', {username: username, password: password})
              .then(function(response)  {
                if(response.data.success)  {
                  quIdentity.currentUser = response.data.user;
                  defer.resolve(true);
                } else {
                  defer.resolve(false);                  
                }
              }, function(err) { console.log(err)});
              return defer.promise;
          }
        }
    }
  ]);
})()
