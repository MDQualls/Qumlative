(function() {
  angular.module("app").controller('quLoginCtrl',
    [ "$http", "quNotifier", "quIdentity",
      function($http, quNotifier, quIdentity) {
        var vm = this;

        vm.identity = quIdentity;

        vm.signin = function(username, password)  {
          $http.post('/login', {username: username, password: password})
            .then(function(response)  {
              if(response.data.success)  {
                quIdentity.currentUser = response.data.user;
                quNotifier.successMsg('You have successfully signed in!');
              } else {
                quNotifier.warningMsg('Username/Password combination incorrect');
              }
            }, function(err) { console.log(err)})
        }
      }
    ]);
})()
