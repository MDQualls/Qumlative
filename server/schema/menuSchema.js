var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
    memberOfMenu: {type: String, required: true},
    id: {type: Number, required: true},
    parentId: {type: Number, required: true, default: 0},
    active: {type: Number, required: true, default: 1},
    title: {type: String, required: true},
    position: {type: Number, required: true},
    extUrl: String,
    target: String,
    href: {type: String, required: true},
    roles: [String],
    alignment: String,
    hasChildren: {type: Number, default: 0}
});

var Menu = mongoose.model('Menu', menuSchema);

function createDefaultMenu() {
  Menu.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      Menu.create({memberOfMenu: 'topMain', id: 1, parentId: 0, active: 1, title:'Home', position: 1, extUrl: '', target: '', href: '/', roles: [], alignment: 'Left', hasChildren: 0});
      Menu.create({memberOfMenu: 'topMain', id: 2, parentId: 0, active: 1, title:'Blog', position: 2, extUrl: '', target: '', href: '/blog', roles: [], alignment: 'Left', hasChildren: 0});
      Menu.create({memberOfMenu: 'topMain', id: 3, parentId: 0, active: 1, title:'About', position: 3, extUrl: '', target: '', href: '/about', roles: [], alignment: 'Right', hasChildren: 0});
    }
  });
}

module.exports = {
    Menu : Menu,
    createDefaultMenu: createDefaultMenu
};