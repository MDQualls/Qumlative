(function() {
  angular.module('app').controller('quLoginCtrl',
    ['$http', 'quNotifier', 'quIdentity', 'quAuth', '$location',
      function($http, quNotifier, quIdentity, quAuth, $location) {
        var vm = this;
        vm.identity = quIdentity;

        vm.signin = function(username, password)  {
          quAuth.authenticateUser(username, password)
            .then(function(response) {
                if (response.data.success === true)  {
                  quNotifier.successMsg('You have successfully signed in!');
                } else {
                  quNotifier.warningMsg(response.data.reason);
                }

            }, function(err) {
                quNotifier.errorMsg(err);
            });
        };

        vm.signout = function()  {
          quAuth.logoutUser().then(function() {
            vm.username = '';
            vm.password = '';
            quNotifier.successMsg('You have successfully signed out!');
            $location.path('/');
          });
        };
      }
    ]);
})();