(function() {
    'use strict';

    var module = angular.module('app');

    function controller(menuFactory) {
        var ctrl = this;

        ctrl.$onInit = function()  {
            ctrl.heading = 'Qumlative';
            //ctrl.brand = 'Demo Site of Michael Qualls';
            ctrl.menuItems = menuFactory.query({memberOfMenu: 'topMain'});
        };
    }

    module.component('appController', {
        templateUrl: '/app/appContent.html',
        controllerAs: 'ctrl',
        controller: ['menuFactory', controller],
        $routeConfig: [
            {path: '/home', component: 'quHome', name: 'Home'},
            {path: '/blog', component: 'quBlog', name: 'Blog'},
            {path:'/demo', component: 'quDemo', name: 'Demo'},
            {path:'/About', component:'quAbout', name: 'About'},
            {path: '/**', redirectTo: ['Home', '']}
        ]
    });

})();