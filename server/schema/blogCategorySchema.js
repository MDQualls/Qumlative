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
                BlogCategory.create({category: 'Day to Day', description: ''});
                BlogCategory.create({category: 'Causes I Support', description: ''});
            }
        });
    }

    module.exports = {
        BlogCategory: BlogCategory,
        createDefaultCategories: createDefaultCategories
    };

})();