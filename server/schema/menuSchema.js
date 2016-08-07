var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
    memberOfMenu: {type: String, required: true},
    id: {type: Number, required: true},
    parentId: {type: Number, required: true, default: 0},
    active: {type: Number, required: true, default: 1},
    icon: {type:String},
    title: {type: String, required: true},
    position: {type: Number, required: true},
    extUrl: String,
    target: String,
    link: {type: String, required: true},
    roles: [String],
    alignment: String,
    hasChildren: {type: Number, default: 0}
});

var Menu = mongoose.model('Menu', menuSchema);

function createDefaultMenu() {
  Menu.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      Menu.create({memberOfMenu: 'topMain', id: 1, parentId: 0, active: 1, icon:'fa fa-home', title:'Home', position: 1, extUrl: '', target: '', link: "['Home']", roles: [], alignment: 'Left', hasChildren: 0});
      Menu.create({memberOfMenu: 'topMain', id: 2, parentId: 0, active: 1, icon:'fa fa-book', title:'Blog', position: 2, extUrl: '', target: '', link: "['Blog']", roles: [], alignment: 'Left', hasChildren: 0});
      // Menu.create({memberOfMenu: 'topMain', id: 3, parentId: 0, active: 1, icon:'fa fa-cogs', title:'Code', position: 3, extUrl: '', target: '', link: "['Code']", roles: [], alignment: 'Left', hasChildren: 0});
      Menu.create({memberOfMenu: 'topMain', id: 4, parentId: 0, active: 1, icon:'fa fa-map-signs', title:'About', position: 4, extUrl: '', target: '', link: "['About']", roles: [], alignment: 'Left', hasChildren: 0});
    }
  });
}

module.exports = {
    Menu : Menu,
    createDefaultMenu: createDefaultMenu
};