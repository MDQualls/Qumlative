(function() {
    'use strict';

    var mongoose = require('mongoose');

    var blogCategorySchema = mongoose.Schema({
        category: {type:String, required: true},
        description: {type:String}
    });

    var BlogCategory = mongoose.model('BlogCategory', blogCategorySchema);

    function createDefaultCategories() {
        BlogCategory.find({}).exec(function(err, collection) {
            if (collection.length === 0)  {
                BlogCategory.create({category: 'AngularJS', description: ''});
                BlogCategory.create({category: 'NodeJS', description: ''});
                BlogCategory.create({category: 'C# Language', description: ''});
                BlogCategory.create({category: 'Scatter Shot', description: ''});
            }

        });
    }

    module.exports = {
        BlogCategory: BlogCategory,
        createDefaultCategories: createDefaultCategories
    };
})();