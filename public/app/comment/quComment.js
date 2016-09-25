(function() {
    'use strict';

    var module = angular.module('app');

    function controller($sanitize) {
        /*jshint validthis: true */
        var ctrl = this;

        var reset = function() {
            ctrl.newComment = '';
            ctrl.frmComment.$setPristine();
            ctrl.frmComment.$setUntouched();
        };

        ctrl.callParentAddComment = function() {
            ctrl.addComment({'newComment': $sanitize(ctrl.newComment)});
            reset();
        };
    }

    module.component('quComment', {
        templateUrl: 'app/comment/quComment.html',
        controllerAs: 'ctrl',
        controller: ['$sanitize', controller],
        bindings: {
            comments: '<',
            user: '<',
            addComment: '&'
        }
    });

})();