(function() {
    'use strict';

    var mongoose = require('mongoose');

    var blogSchema = mongoose.Schema({
        title: {type: String, required: true},
        summary: {type:String, required:true},
        post: {type:String, required:true},
        datePosted: {type: Date, required:true},
        status: {type:String, required:true},
        category: {type:String, required:true},
        images: {type: [String]}
    });

    var Blog = mongoose.model('Blog', blogSchema);

    module.exports = {
        Blog: Blog
    };
})();