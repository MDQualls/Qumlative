(function() {

  angular.module('app').factory('quIdentity', function() {

    var fac = this;

    fac.currentUser === undefined;

    return {
      currentUser: fac.currentUser,

      isAuthenticated: function() {
        var x = (fac.currentUser === undefined) ? false : true;
        return x;
      }
    }
  });
})()
