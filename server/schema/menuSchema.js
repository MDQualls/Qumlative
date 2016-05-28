var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
    brand: String,
    menuItems: [{
        memberOfMenu: String,
        id: Number,
        parentId: Number,
        active: Number,
        title: String,
        position: Number,
        extUrl: String,
        target: String,
        href: String,
        roles: [String],
        alignment: String,
        hasChildren: Number
    }]
});

var Menu = mongoose.model('User', menuSchema);

module.exports = {
    Menu : Menu
};