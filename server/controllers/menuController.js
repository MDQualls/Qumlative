(function() {
    'use strict';

    var Menu = require('mongoose').model('Menu');

    function getMenu(req, res, next)  {
        Menu.find({}).exec(function(err, collection) {
            if (err) {
                if (err) {return next(err);}
            }
            res.send(collection);
        });
    }

    function createMenuItem(req, res, next) {
        var menuData = req.body;
        Menu.create(menuData, function(err, menu) {
            if (err) {
                if (err.toString().indexOf('E11000') > -1) {
                    err = new Error('Duplicate Username');
                }
                res.status(400);
                return res.send({reason:err.toString()});
            }
            res.send(menu);
        });
    }

    function updateMenuItem(req, res) {
        req.menu.save(function(err) {
            if (err) {
                res.status(400); return res.send({reason:err.toString()});
            }
            res.send(req.menu);
        });
    }

    module.exports = {
        getMenu : getMenu,
        createMenuItem : createMenuItem,
        updateMenuItem : updateMenuItem
    };
})();