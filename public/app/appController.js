(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quMenuFactory) {
        var ctrl = this;

        ctrl.$onInit = function()  {
            ctrl.heading = 'Qumlative';
            ctrl.menuItems = quMenuFactory.query({memberOfMenu: 'topMain'});
        };
    }

    module.component('appController', {
        templateUrl: '/app/appContent.html',
        controllerAs: 'ctrl',
        controller: ['quMenuFactory', controller],
        $routeConfig: [
            {path: '/home', component: 'quHome', name: 'Home'},
            {path: '/blog', component: 'quBlog', name: 'Blog'},
            {path:'/demo', component: 'quDemo', name: 'Demo'},
            {path:'/about', component:'quAbout', name: 'About'},
            {path:'/privacy', component:'extPrivacy', name: 'Privacy'},
            {path:'/admin', component:'quAdmin', name: 'Admin'},
            {path:'/admin/login', component:'quLogin', name: 'AdminLogin'},
            {path:'/admin/blog', component:'quBlogAdmin', name: 'BlogAdmin'},
            {path:'/admin/blog/:id', component:'quEditBlogAdmin', name: 'EditBlog'},
            {path:'/admin/blog/add', component:'quNewBlogAdmin', name: 'NewBlog'},
            {path:'/admin/user', component:'quUserAdmin', name: 'UserAdmin'},
            {path: '/**', redirectTo: ['Home', '']}
        ]
    });

})();