var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
    brand: String,
    menuItems: [{
        memberOfMenu: {String, required: true},
        id: {Number, required: true},
        parentId: {Number, required: true, default: 0},
        active: {Number, required: true, default: 1},
        title: {String, required: true},
        position: {Number, required: true},
        extUrl: String,
        target: String,
        href: {String, required: true},
        roles: [String],
        alignment: String,
        hasChildren: {Number, default: 0}
    }]
});

var Menu = mongoose.model('Menu', menuSchema);

module.exports = {
    Menu : Menu
};