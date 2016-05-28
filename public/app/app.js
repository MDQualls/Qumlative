
(function()  {
//'ngResource', 'ngRoute', 'ngStorage',
angular.module('app', ['extHeaderModule']);

// angular.module('app').config(
//   ['$routeProvider', '$locationProvider',
//   function($routeProvider, $locationProvider) {

//   var routeRoleChecks = {
//     admin: {auth: function(quAuth) {
//               return quAuth.authorizeCurrentUserForRoute('admin')
//             }}
//   };

//   $locationProvider.html5Mode(true);

//   $routeProvider
//     .when('/', {templateUrl: '/partials/main/main', controller: 'quMainCtrl as ctrl'})
//     .when('/admin/users', {templateUrl: '/partials/admin/user-list',controller: 'quUserListCtrl as ctrl', resolve: routeRoleChecks.admin });
// }]);

// angular.module('app').run(function($rootScope, $location) {
//   $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
//     if (rejection === 'not authorized') {
//       $location.path('/');
//     }
//   });
// });

})();
