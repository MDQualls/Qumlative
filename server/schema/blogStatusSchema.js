(function() {
    'use strict';

    var mongoose = require('mongoose');

    var blogStatusSchema = mongoose.Schema({
        status: {type: String, required: true},
        description: {type: String}
    });

    var BlogStatus = mongoose.model('BlogStatus', blogStatusSchema);

    function createDefaultStatuses()  {
        BlogStatus.find({}).exec(function(err, collection) {
            if (err) {
            console.log(err);
            return;
            }
            if (collection.length === 0)  {
                BlogStatus.create({status: 'Post', Description: 'Currently active blog post'});
                BlogStatus.create({status: 'Draft', Description: 'Saved for editing.  Not a current post'});
                BlogStatus.create({status: 'Archived', Description: 'Post that is no longer active and has been archived'});
            }
        });
    }

    module.exports = {
        BlogStatus: BlogStatus,
        createDefaultStatuses: createDefaultStatuses
    };

})();