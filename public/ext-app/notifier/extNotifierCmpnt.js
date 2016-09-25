(function() {
    'use strict';
    angular.module('extNotifierModule').factory('extNotifierSvc',
        ['quToaster',
        function(quToaster) {

            function successMsg(msg) {
                quToaster.success(msg);
            }

            function warningMsg(msg) {
                quToaster.warning(msg);
            }

            function infoMsg(msg) {
                quToaster.info(msg);
            }

            function errorMsg(msg) {
                quToaster.error(msg);
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