(function() {
    'use strict';

    var mongoose = require('mongoose');

    var commentSchema = mongoose.Schema({
        commentForId: {type: String, required: true},
        comment:{type: String, required: true},
        username:{type: String, required: true},
        dateOfComment: {type: Date, required: true},
        dateUpdated: {type: Date},
        parentId: {type: String, required: true, default: 0}
    });

    var Comment = mongoose.model('Comment', commentSchema);

    module.exports = {
        Comment: Comment
    };
})();

