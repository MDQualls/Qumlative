(function() {
  angular.module("app").controller('quLoginCtrl',
    [ "$http", "quNotifier", "quIdentity", "quAuth", "$location",
      function($http, quNotifier, quIdentity, quAuth, $location) {
        var vm = this;
        vm.identity = quIdentity;

        vm.signin = function(username, password)  {
          quAuth.authenticateUser(username, password)
            .then(function(success) {
              if(success)  {
                quNotifier.successMsg('You have successfully signed in!');
              } else {
                quNotifier.warningMsg('Username/Password combination incorrect');
              }
            })
        }

        vm.signout = function()  {
          quAuth.logoutUser().then(function() {
            vm.username = '';
            vm.password = '';
            quNotifier.successMsg('You have successfully signed out!');
            $location.path('/');
          });
        }
      }
    ]);
})()
