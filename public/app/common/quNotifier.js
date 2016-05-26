(function() {
  var toastr;
  angular.module('app').value('quToastr', toastr);

  angular.module('app').factory('quNotifier', ["quToastr", function(quToastr)  {

    function successMsg(msg) {
      quToastr.success(msg);
      console.log(msg);
    }

    function warningMsg(msg) {
      quToastr.warning(msg);
      console.log(msg);
    }

    function infoMsg(msg) {
      quToastr.info(msg);
      console.log(msg);
    }

    function errorMsg(msg) {
      quToastr.error(msg);
      console.log(msg);
    }

    return {
      successMsg: successMsg,
      warningMsg: warningMsg,
      infoMsg: infoMsg,
      errorMsg: errorMsg
    }
  }]);
})()
