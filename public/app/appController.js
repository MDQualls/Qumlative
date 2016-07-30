(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quMenuFactory,quAuth,quIdentity,extNotifierSvc) {
        var ctrl = this;

        ctrl.currentUser = {};

        ctrl.doLogin = function(username, password) {
            quAuth.authenticateUser(username, password)
            .then(function(response) {
              if (response.data.success === true) {
                extNotifierSvc.successMsg('You have successfully signed in!');
                ctrl.currentUser = quIdentity.currentUser();
              } else {
                extNotifierSvc.warningMsg(response.data.reason);
              }
            });
        };

        ctrl.doLogOut = function()  {
            quAuth.logoutUser()
                .then(function() {
                    ctrl.currentUser = quIdentity.currentUser();
                });
        };

        ctrl.$onInit = function()  {
            ctrl.heading = 'Qumlative';
            ctrl.menuItems = quMenuFactory.query({memberOfMenu: 'topMain'});
            ctrl.currentUser = quIdentity.currentUser();
        };
    }

    module.component('appController', {
        templateUrl: '/app/appContent.html',
        controllerAs: 'ctrl',
        controller: ['quMenuFactory', 'quAuth', 'quIdentity', 'extNotifierSvc', controller],
        $routeConfig: [
            {path: '/home', component: 'quHome', name: 'Home'},
            {path: '/blog', component: 'quBlog', name: 'Blog'},
            {path: '/blog/:id', component: 'quBlog', name: 'BlogDetail'},
            {path: '/blog/category/:category', component: 'quBlog', name: 'BlogsForCat'},
            {path:'/code', component: 'quDemo', name: 'Code'},
            {path:'/about', component:'quAbout', name: 'About'},
            {path:'/privacy', component:'extPrivacy', name: 'Privacy'},
            {path:'/register', component:'quRegister', name: 'Register'},
            {path:'/registered', component:'extRegisterConfirm', name: 'Registered'},
            {path:'/admin', component:'quAdmin', name: 'Admin'},
            {path:'/admin/blog', component:'quBlogAdmin', name: 'BlogAdmin'},
            {path:'/admin/blog/:id', component:'quBlogAdminDetail', name: 'EditBlog'},
            {path:'/admin/blog/add', component:'quBlogAdminDetail', name: 'NewBlog'},
            {path:'/admin/user', component:'quUserAdmin', name: 'UserAdmin'},
            {path: '/**', redirectTo: ['Home', '']}
        ]
    });
})();