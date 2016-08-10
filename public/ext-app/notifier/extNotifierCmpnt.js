(function() {
    'use strict';
    angular.module('extNotifierModule').factory('extNotifierSvc',
        ['quToaster',
        function(quToaster) {

            function successMsg(msg) {
                quToaster.success(msg);
                console.log(msg);
            }

            function warningMsg(msg) {
                quToaster.warning(msg);
                console.log(msg);
            }

            function infoMsg(msg) {
                quToaster.info(msg);
                console.log(msg);
            }

            function errorMsg(msg) {
                quToaster.error(msg);
                console.log(msg);
            }

            return {
                successMsg: successMsg,
                warningMsg: warningMsg,
                infoMsg: infoMsg,
                errorMsg: errorMsg
            };
        }
    ]);
})();