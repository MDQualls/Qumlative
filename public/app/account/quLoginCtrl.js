(function() {
  angular.module("app").controller('quLoginCtrl',
    [ "$http", "quNotifier", "quIdentity", "quAuth",
      function($http, quNotifier, quIdentity, quAuth) {
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
      }
    ]);
})()
