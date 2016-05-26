(function() {

  angular.module('app').controller('quUserListCtrl',
  [ "quUserRsc",
    function(quUserRsc) {
      var vm = this;

      vm.users = quUserRsc.query();
    }
  ])
})();
