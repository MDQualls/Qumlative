(function() {
    'use strict';

    exports.daydiff = function(first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    };

})();