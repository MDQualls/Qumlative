/*

    REQUIRES TOASTR JS LIBRARY AND TOASTR CSS

    bower install toastr --save    
*/
(function() {
    'use strict';
    angular.module('extNotifierModule', []).value('quToaster',toastr);
})();