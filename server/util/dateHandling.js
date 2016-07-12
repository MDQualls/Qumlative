(function() {
    'use strict';

    exports.daydiff = function(first, second) {
        return Math.round((first - second) / (1000 * 60 * 60 * 24));
    };

})();