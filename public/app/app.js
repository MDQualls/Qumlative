
(function()  {

  angular.module('app', ['ngResource', 'ngRoute']);

  angular.module('app').config(
    ["$routeProvider", "$locationProvider",
      function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
          .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl as ctrl'});
      }
    ]);

    angular.module('app').controller('mainCtrl',
      [
        function() {
            var vm = this;

            vm.myVar = "Hello Angular";
        }
      ]);
})();
