(function() {
    'use strict';

    var express = require('express');
    var menuController = require('../controllers/menuController');
    var auth = require('../config/auth');

    var routes = function()  {

        var menuRouter = express.Router();

        menuRouter.route('/')
            .post(auth.requiresRole('admin'), function(req, res, next)  {
                menuController.createMenuItem(req, res, next);
            })
            .get(function(req, res, next)  {
                menuController.getMenu(req, res, next);
            });

        menuRouter.route('/:memberOfMenu')
            .get(function(req, res, next)  {
                menuController.getMenuMembers(req, res, next);
            })
            .put(function(req, res)  {

            });
        return menuRouter;
    };

    module.exports = routes;
})();