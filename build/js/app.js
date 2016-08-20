(function() {
    'use strict';
    angular.module('extFooterModule',[]);
})();
(function() {
    'use strict';
    angular.module('extHeaderModule',['extHorizontalMenuModule']);
})();
(function() {
    'use strict';
    angular.module('extHorizontalMenuModule', []);
})();
/*

    REQUIRES TOASTR JS LIBRARY AND TOASTR CSS

    bower install toastr --save    
*/
(function() {
    'use strict';
    angular.module('extNotifierModule', []).value('quToaster',toastr);
})();
(function() {
    'use strict';
angular.module('extLoginModule',[]);
})();
(function() {
    'use strict';
    angular.module('extPagingModule',[]);
})();
(function() {
    'use strict';
    angular.module('extPrivacyModule',[]);
})();
(function() {
    'use strict';
angular.module('extUserModule',[]);
})();
(function() {
    'use strict';
    angular.module('extUtilModule',[]);
})();
(function() {
    'use strict';
    angular.module('extVerticalMenuModule', []);
})();
(function() {
    'use strict';

    var module = angular.module('extFooterModule');

    function controller() {

    }

    module.component('extFooter', {
        templateUrl: 'ext-app/footer/extFooter.html',
        controllerAs: 'ctrl',
        transclude: true,
        controller: [controller]
    });

})();

(function() {
    'use strict';

    var module = angular.module('extHeaderModule');

    function controller() {

    }

    module.component('extHeader', {
        templateUrl: 'ext-app/header/extHeader.html',
        bindings: {
            logoSrc: '<',
            menuItems: '<',
            heading: '<',
            brand: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';

    var module = angular.module('extHorizontalMenuModule');

    function controller() {

    }

    module.component('extHorizontalMenu', {
        templateUrl:'ext-app/horizontal-menu/extHorizontalMenu.html',
        bindings: {
            brand: '<',
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';
    angular.module('extNotifierModule').factory('extNotifierSvc',
        ['quToaster',
        function(quToaster) {

            function successMsg(msg) {
                quToaster.success(msg);
                console.log(msg);
            }

            function warningMsg(msg) {
                quToaster.warning(msg);
                console.log(msg);
            }

            function infoMsg(msg) {
                quToaster.info(msg);
                console.log(msg);
            }

            function errorMsg(msg) {
                quToaster.error(msg);
                console.log(msg);
            }

            return {
                successMsg: successMsg,
                warningMsg: warningMsg,
                infoMsg: infoMsg,
                errorMsg: errorMsg
            };
        }
    ]);
})();
(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {
        var ctrl = this;

        ctrl.showLoginForm = false;
        ctrl.username = '';
        ctrl.password = '';

        function reset() {
            ctrl.showLoginForm = false;
            ctrl.username = '';
            ctrl.password = '';
        }

        ctrl.toggleLogin = function() {
            if (ctrl.showLoginForm === true) {
                reset();
            } else {
                ctrl.showLoginForm = true;
            }
        };

        ctrl.callParentLogin = function() {
            if (ctrl.extLoginForm.$valid === false) {
                return false;
            } else {
                //call parent scope to log into application
                ctrl.doLogin({'username': ctrl.username, 'password': ctrl.password});
                reset();
            }
        };

        ctrl.callParentLogout = function() {
            ctrl.doLogOut();
            reset();
        };

        ctrl.isAdmin = function()  {
            return ctrl.user.roles && ctrl.user.roles.indexOf('admin') > -1;
        }
    }

    module.component('extLogin', {
        templateUrl: 'ext-app/login/extLogin.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            user: '=',
            doLogin: '&',
            doLogOut: '&'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {
        var ctrl = this;

        ctrl.reset = function() {
            ctrl.registration = {firstName:'',lastName:'',username:'',emailAddress:'',password:'',passwordRepeat:''};
        };

        ctrl.callParentRegister = function() {
            if (ctrl.frmRegister.$valid === false) {
                return false;
            } else {
                //call parent scope to log into application
                ctrl.doRegister({'registration': ctrl.registration});
            }
        };

        ctrl.callParentCancel = function() {
            ctrl.doCancel();
        };

        ctrl.$onInit = function() {
            ctrl.reset();
        };
    }

    module.component('extRegister', {
        templateUrl: 'ext-app/login/extRegister.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            doRegister: '&',
            doCancel: '&',
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('extLoginModule');

    function controller() {

    }

    module.component('extRegisterConfirm', {
        templateUrl: 'ext-app/login/extRegisterConfirm.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.nextButtonEnabled = function()  {
            ctrl.moreRecords = (ctrl.pageModel.page * ctrl.pageModel.pageSize) <= ctrl.pageModel.totalRecords;
        };

        ctrl.callParentNavigate = function() {
            ctrl.nextButtonEnabled();
            ctrl.doNavigateNext();
        };

        ctrl.$onInit = function() {
            ctrl.nextButtonEnabled();
        };
    }

    module.component('extPageNext', {
        templateUrl: 'ext-app/paging/extPageNext.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            pageModel: '<',
            doNavigateNext: '&'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.prevButtonEnabled = function() {
            ctrl.prevRecords = (ctrl.pageModel.page > 1);
        };

        ctrl.callParentNavigate = function() {
            ctrl.prevButtonEnabled();
            ctrl.doNavigatePrev();
        };

        ctrl.$onInit = function() {
            ctrl.prevButtonEnabled();
        };
    }

    module.component('extPagePrev', {
        templateUrl: 'ext-app/paging/extPagePrev.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            pageModel: '<',
            doNavigatePrev: '&'
        }
    });
})();
(function() {
    'use strict';

    var module = angular.module('extPagingModule');

    function controller() {
        var ctrl = this;

        ctrl.callParentNavNext = function() {
            ctrl.doNavigateNext();
        };

        ctrl.callParentNavPrev = function() {
            ctrl.doNavigatePrev();
        };

        ctrl.$onChanges = function(changesObj) {
            if (changesObj.page !== undefined) {
                ctrl.isoPage = changesObj.page.currentValue;
            }
            if (changesObj.pageSize !== undefined) {
                ctrl.isoPageSize = changesObj.pageSize.currentValue;
            }
            if (changesObj.totalRecords !== undefined) {
                ctrl.isoTotalRecords = changesObj.totalRecords.currentValue;
            }
            ctrl.moreRecords = (parseFloat(ctrl.isoPage * ctrl.isoPageSize) < parseFloat(ctrl.isoTotalRecords)) ? true : false;
            ctrl.prevRecords = (ctrl.isoPage > 1) ? true : false;
            ctrl.isoPages = (ctrl.isoTotalRecords / ctrl.isoPageSize > 1) ? ctrl.isoTotalRecords / ctrl.isoPageSize : 1;
        };
    }

    module.component('extPager', {
        templateUrl: 'ext-app/paging/extPager.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            page: '<',
            pageSize: '<',
            totalRecords: '<',
            doNavigateNext: '&',
            doNavigatePrev: '&'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('extPrivacyModule');

    function controller() {

    }

    module.component('extPrivacy', {
        templateUrl: 'ext-app/privacy/extPrivacy.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';

    var module = angular.module('extUserModule');

    function controller() {

    }

    module.component('extBan', {
        templateUrl: 'ext-app/user/extBan.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            currentStatus: '<',
            setStatus: '&'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('extUserModule');

    function controller() {

    }

    module.component('extSuspend', {
        templateUrl: 'ext-app/user/extSuspend.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            currentStatus: '<',
            setStatus: '&'
        }
    });

})();
(function() {
    'use strict';
var compareTo = function() {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=compareTo'
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue === scope.otherModelValue;
            };

            scope.$watch('otherModelValue', function() {
                ngModel.$validate();
            });
        }
    };
};

angular.module('extUtilModule').directive('compareTo', compareTo);
})();
(function() {
    'use strict';
    var module = angular.module('extUtilModule');

    module.filter('extUtcDateFilter',['$filter', function ($filter) {
        return function (dateValue) {
            var tmpDate = new Date(dateValue);
            var formatted = tmpDate.getUTCFullYear() + '-' + (tmpDate.getUTCMonth() + 1) + '-' + tmpDate.getUTCDate();
            return new Date(formatted);
        };
    }]);
})();
(function() {
    'use strict';

    var module = angular.module('extVerticalMenuModule');

    function controller() {

    }

    module.component('extVerticalMenu', {
        templateUrl: 'ext-app/vertical-menu/extVerticalMenu.html',
        bindings: {
            menuItems: '<'
        },
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();

(function()  {
    angular.module('app',
        [
            'ngResource',
            'extHeaderModule',
            'extFooterModule',
            'ngComponentRouter',
            'ngStorage',
            'extNotifierModule',
            'textAngular',
            'ngSanitize',
            'ui.bootstrap',
            'extPrivacyModule',
            'extUserModule',
            'extLoginModule',
            'extUtilModule',
            'extPagingModule'
        ]);
    angular.module('app').value('$routerRootComponent', 'appController');
})();

(function() {
    'use strict';
    angular.module('app').controller('quAdminCategoryController',
        ['$uibModalInstance', 'quBlogCategoryFactory',
        function ($uibModalInstance, quBlogCategoryFactory) {
            var ctrl = this;

            ctrl.category = {'category':'','description':''};

            ctrl.ok = function () {

                console.log('SUBMITTED!!!');

                if (ctrl.frmBlogCategory.$valid === false) {
                    return false;
                } else {

                    quBlogCategoryFactory.save(ctrl.category, function(result) {
                        $uibModalInstance.close(result);
                    },
                    function (error) {
                        console.log(error);
                    });
                }
            };

            ctrl.cancel = function () {

                console.log('DISMISS!');

                $uibModalInstance.dismiss('cancel');
            };
    }]);
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, quBlogFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.blogs = [];

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.isAdmin())  {
                ctrl.$router.navigate(['Home']);
            }
        };

        ctrl.$onInit = function()  {
            ctrl.blogs = quBlogFactory.blogResource.query();
        };

        ctrl.returnToAdmin = function()  {
            ctrl.$router.navigate(['Admin']);
        };

        ctrl.newBlogPost = function() {
            ctrl.$router.navigate(['NewBlog']);
        };
    }

    module.component('quBlogAdmin', {
        templateUrl: 'app/admin/blog/quBlogAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity','quBlogFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, quBlogStatusFactory, $uibModal, extNotifierSvc, $filter) {
        var ctrl = this;

        ctrl.blogCategories = [];
        ctrl.blogStatuses = [];
        ctrl.blogSchema = {title: '',summary: '',post: '',datePosted: '',status: '',category: '',images: []};
        ctrl.id = 0;

        ctrl.updateBlogs = function () {

            if (ctrl.frmBlog.$valid === false) {
                return false;
            } else {

                if (ctrl.id === 0)  {
                    quBlogFactory.blogResource.save(ctrl.blogSchema, function(result) {
                        extNotifierSvc.successMsg('New blog successfully posted');
                        ctrl.$router.navigate(['BlogAdmin']);
                    },
                    function (error) {
                        extNotifierSvc.errorMsg(error);
                        console.log(error);
                    });
                } else {

                    quBlogFactory.blogResource.update(ctrl.blogSchema, function(result) {
                        extNotifierSvc.successMsg('Blog has been successfully updated');
                        ctrl.$router.navigate(['BlogAdmin']);
                    },
                    function (error) {
                        extNotifierSvc.errorMsg(error.statusText);
                        console.log(error);
                    });
                }
            }
        };

        ctrl.returnToAdmin = function() {
            ctrl.$router.navigate(['BlogAdmin']);
        };

        //control the modal for the new category form
        ctrl.openCategoryModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/admin/blog/quAdminCategoryDetail.html',
                controller: 'quAdminCategoryController as ctrl',
            }).result.then(function (result) {
                ctrl.blogCategories.push(result);
            }, function (error) {
                console.log(error);
                extNotifierSvc.errorMsg(error);
            });
        };

        ctrl.$routerOnActivate = function(next, previous) {
            if (next.params.id !== undefined) {
                ctrl.id = next.params.id;
                ctrl.blogSchema = quBlogFactory.blogResource.get({id:ctrl.id}, function() {
                    ctrl.blogSchema.datePosted = $filter('extUtcDateFilter')(ctrl.blogSchema.datePosted);
                    ctrl.blogSchema._id = ctrl.id;
                });
            }
        };

        ctrl.$onInit = function() {
            ctrl.blogCategories = quBlogCategoryFactory.query();
            ctrl.blogStatuses = quBlogStatusFactory.query();
        };
    }

    module.component('quBlogAdminDetail', {
        templateUrl: 'app/admin/blog/quBlogAdminDetail.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', 'quBlogCategoryFactory', 'quBlogStatusFactory', '$uibModal', 'extNotifierSvc', '$filter', controller],
        bindings: {
            '$router': '<'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quUserFactory,extNotifierSvc) {
        var ctrl = this;
        ctrl.users = [];

        ctrl.returnToAdmin = function() {
            ctrl.$router.navigate(['Admin']);
        };

        ctrl.setBanStatus = function(user, ban)  {
            if (ban === 1) {
                user.banned = 1;
            } else {
                user.banned = 0;
            }
            quUserFactory.BanResource.query({id:user._id},
                function(result) {
                    extNotifierSvc.successMsg('User successfully banned');
                },
                function(err) {
                    extNotifierSvc.errorMsg(err);
                });
            console.log(user.banned);
        };

        ctrl.setSuspendStatus = function(user, suspend) {
            if (suspend === 1) {
                user.suspended = 1;
            } else {
                user.suspended = 0;
            }
            quUserFactory.SuspendResource.query({id:user._id},
                function(result) {
                    extNotifierSvc.successMsg('User successfully Suspended');
                },
                function(err) {
                    extNotifierSvc.errorMsg(err);
                });
            console.log(user.suspended);
        };

        ctrl.$onInit = function() {
            quUserFactory.UserResource.query(
                function(result) {
                    ctrl.users = result;
                },
                function(err) {
                    extNotifierSvc.errorMsg(err);
                    console.log(err);
                });
        };
    }

    module.component('quUserAdmin', {
        templateUrl: 'app/admin/user/quUserAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quUserFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();
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
        templateUrl: 'app/appContent.html',
        controllerAs: 'ctrl',
        controller: ['quMenuFactory', 'quAuth', 'quIdentity', 'extNotifierSvc', controller],
        $routeConfig: [
            {path:'/home', component: 'quHome', name: 'Home'},
            {path:'/blog', component: 'quBlog', name: 'Blog'},
            {path:'/blog/:id', component: 'quBlogPost', name: 'BlogPost'},
            {path:'/blog/category/:category', component: 'quBlog', name: 'BlogsForCat'},
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
            {path:'/account', component:'quAccount', name:'Account'},
            {path:'/**', redirectTo: ['Home', '']}
        ]
    });
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('appRouter', {
        templateUrl: '/app',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('quAbout', {
        templateUrl: 'app/about/quAbout.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, extNotifierSvc, quUserFactory) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.currentUser())  {
                extNotifierSvc.warningMsg('You are not currently logged in.');
                ctrl.$router.navigate(['Home']);
            }
        };

        ctrl.$onInit = function() {
            ctrl.currentUser = quIdentity.currentUser();
        };

        ctrl.doCancel = function()  {
            ctrl.$router.navigate(['Home']);
        };

        ctrl.updateUserPassword = function(passwordUpdate) {
            quUserFactory.PasswordResource.update({id:ctrl.currentUser._id}, passwordUpdate.password,
                function(response) {
                    extNotifierSvc.successMsg('Password successfully updated');
                    ctrl.$router.navigate(['Home']);
                },
                function(err) {
                    extNotifierSvc.errorMsg('An error occurred during password update.  Please refresh and try again.');
                });
        };
    }

    module.component('quAccount', {
        templateUrl: 'app/account/quAccount.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity', 'extNotifierSvc', 'quUserFactory', controller],
        bindings: {
            '$router': '<'
        }
    });

})();
(function () {

  angular.module('app').factory('quAuth',
    ['$http', 'quIdentity', '$q',
      function ($http, quIdentity, $q) {
        return {
          authenticateUser: function (username, password) {
            var defer = $q.defer();
            $http.post('/login', {username: username, password: password})
              .then(function (response) {
                if (response.data.success === true) {
                  quIdentity.setCurrentUser(response.data.user);
                }
                defer.resolve(response);
              }, function (err) {
                defer.reject(err);
            });
            return defer.promise;
          },
          logoutUser: function () {
            var defer = $q.defer();
            $http.post('/logout', {logout: true})
              .then(function () {
                quIdentity.setCurrentUser(undefined);
                defer.resolve();
              });
            return defer.promise;
          },
          authorizeCurrentUserForRoute: function (role) {
            if (quIdentity.isAuthorized(role)) {
              return true;
            } else {
              return $q.reject('not authorized');
            }

          },
          authorizeAuthenticatedUserForRoute: function () {
            if (quIdentity.isAuthenticated()) {
              return true;
            } else {
              return $q.reject('not authorized');
            }
          }
        };
      }
    ]);
})();

(function() {

  angular.module('app').factory('quIdentity',
    ['$sessionStorage',
    function($sessionStorage) {

      return {
        setCurrentUser: function(user)  {
          $sessionStorage.currentUser = user;
        },
        currentUser: function() {
          return $sessionStorage.currentUser;
        },
        isAuthenticated: function() {
          return !!$sessionStorage.currentUser;
        },
        isAuthorized: function(role) {
          return !!$sessionStorage.currentUser && $sessionStorage.currentUser.roles.indexOf(role) > -1;
        },
        isAdmin: function() {
          if ($sessionStorage.currentUser === undefined)
          {
            return false;
          }
          return $sessionStorage.currentUser.roles && $sessionStorage.currentUser.roles.indexOf('admin') > -1;
        }
      };
    }]);
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        var ctrl = this;

        ctrl.$onInit = function()  {
            console.log('inside user account component');
            console.log(ctrl.user);
        };

        ctrl.callParentCancel = function()  {
            ctrl.doCancel();
        };

        ctrl.callParentUpdPassword = function()  {
            if (ctrl.frmPasswordUpd.$valid === false) {
                return false;
            } else {
                //call parent scope to update password
                ctrl.doPasswordUpdate({'passwordUpdate': ctrl.passwordUpdate});
            }
        }
    }

    module.component('quUserAccount', {
        templateUrl: 'app/account/quUserAccount.html',
        controllerAs: 'ctrl',
        controller: [controller],
        bindings: {
            user: '<',
            doCancel: '&',
            doPasswordUpdate: '&'
        }
    });

})();

(function() {
  'use strict';
  angular.module('app').factory('quUserFactory', function($resource) {

    var UserResource = $resource('/api/users/:id', {id: '@id', isArray:true},
      {update: {method:'PUT',isArray:false}
    });

    var BanResource = $resource('/api/ban/:id', {id: '@id', isArray:true});

    var SuspendResource = $resource('/api/suspend/:id', {id: '@id', isArray:true});

    var PasswordResource = $resource('/api/password/:id', {id: '@id', isArray:true},
      {update: {id: '@id', method:'PUT',isArray:false}
    });

    return {
      UserResource: UserResource,
      BanResource: BanResource,
      SuspendResource: SuspendResource,
      PasswordResource: PasswordResource
    };
  });
})();

(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quIdentity, quAuth, extNotifierSvc) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {
            if (!quIdentity.isAdmin())  {
                extNotifierSvc.warningMsg('You are not authenicated for that route.');
                ctrl.$router.navigate(['Home']);
            }
        };

        ctrl.adminLogOut = function()  {
            quAuth.logoutUser()
            .then(function() {
                extNotifierSvc.successMsg('You have successfully logged out!');
                ctrl.$router.navigate(['BlogAdmin']);
              },function(err)  {
                extNotifierSvc.warningMsg('An error occurred while logging out.');
            });
        };
    }

    module.component('quAdmin', {
        templateUrl: 'app/admin/quAdmin.html',
        controllerAs: 'ctrl',
        controller: ['quIdentity', 'quAuth', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<'
        }
    });

})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, extNotifierSvc, $filter) {
        var ctrl = this;

        ctrl.blogs = [];
        ctrl.blogCategory = undefined;
        ctrl.categories = [];
        ctrl.catCounts = [];
        ctrl.title = 'Recent Blog Posts';
        ctrl.pageModel = {page:1, pageSize:3, totalRecords:''};

        function updatePageModel(page)  {
            ctrl.pageModel.page = page;
        }

        function queryBlogs(page)  {
            quBlogFactory.blogResourcePaged.query({page:page, pageSize:ctrl.pageModel.pageSize}, function(result) {
                ctrl.blogs = $filter('quShortenBlog')(result);
                updatePageModel(page);
            }, function (error) { extNotifierSvc.errorMsg(error); console.log(error); });
        }

        function queryBlogCategory(category,page)  {
            quBlogFactory.blogCatResourcePaged.query({category:category, page:page, pageSize:ctrl.pageModel.pageSize}, function(result) {
                ctrl.blogs = $filter('quShortenBlog')(result);
                ctrl.title = '"' + decodeURI(category) + '" Category Posts';
                updatePageModel(page);
            }, function (error) { extNotifierSvc.errorMsg(error); console.log(error); });
        }

        ctrl.NavNextPage = function()  {
            //next page
            if (ctrl.blogCategory !== undefined)  {
                queryBlogCategory(ctrl.blogCategory,ctrl.pageModel.page += 1);
            } else {
                queryBlogs(ctrl.pageModel.page += 1);
            }
        };

        ctrl.NavPrevPage = function() {
            //prev page
            if (ctrl.blogCategory !== undefined)  {
                queryBlogCategory(ctrl.blogCategory,ctrl.pageModel.page -= 1);
            } else {
                queryBlogs(ctrl.pageModel.page -= 1);
            }
        };

        ctrl.$routerOnActivate = function(next, previous) {

            ctrl.blogCategory = next.params.category || undefined;

            if (ctrl.blogCategory !== undefined)  {

                quBlogFactory.blogResourceCount.get({category:ctrl.blogCategory},
                    function(result)  {
                        ctrl.pageModel.totalRecords = result.count;
                    }, function(error) {
                        extNotifierSvc.errorMsg(error);
                        console.log(error);
                    }
                );
                queryBlogCategory(next.params.category, 1);

            } else {

                quBlogFactory.blogResourceCount.get(function(result)  {
                        ctrl.pageModel.totalRecords = result.count;
                    }, function(error) {
                        extNotifierSvc.errorMsg(error);
                        console.log(error);
                    }
                );

                queryBlogs(1);
            }

            quBlogFactory.blogCatCountResource.query(function(result) {
                ctrl.catCounts = result;
            },
            function(error) {
                extNotifierSvc.errorMsg(error);
                console.log(error);
            });
        };
    }

    module.component('quBlog', {
        templateUrl: 'app/blog/quBlog.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory','quBlogCategoryFactory', 'extNotifierSvc', '$filter', controller],
        bindings: {
            $router: '<'
        }
    });

})();
(function() {
    'use strict';

    angular.module('app').factory('quBlogCategoryFactory',
    ['$resource',
    function($resource) {
        var blogCategoryResource = $resource('/api/blogCategory/:id',
            {id:'@id', isArray:true}
        );
        return blogCategoryResource;
    }]);
})();
(function() {
    'use strict';
    //$resource(url, [paramDefaults], [actions], options);
    angular.module('app').factory('quBlogFactory',
        ['$resource',
        function($resource) {

            var blogResource = $resource('/api/blog/:id',
                {id:'@id', isArray:true},
                {update: {method: 'PUT'}}
            );

            var maxResource = $resource('/api/blogtop');

            var blogResourceCount = $resource('/api/blogCount/:category',
                {category: '@category', isArray:true}
            );

            var blogResourcePaged = $resource('/api/blog/:page/:pageSize/page',
                {page:'@page',pageSize:'@pageSize',isArray:true}
            );

            //get an aggregate listing of the count of posts by category
            var blogCatCountResource = $resource('/api/blogCat/');

            var blogByCatResource = $resource('/api/blog/category/:category',
                {category: '@category', isArray:true}
            );

            var blogCatResourcePaged = $resource('/api/blog/category/:category/:page/:pageSize/page',
                {category: '@category', page:'@page',pageSize:'@pageSize',isArray:true}
            );

            return {
                blogResource: blogResource,
                blogCatCountResource: blogCatCountResource,
                blogByCatResource: blogByCatResource,
                blogResourcePaged: blogResourcePaged,
                blogCatResourcePaged: blogCatResourcePaged,
                blogResourceCount: blogResourceCount,
                maxResource: maxResource
            };
        }
    ]);
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory) {
        var ctrl = this;

        ctrl.$routerOnActivate = function(next, previous) {

            //set the back button ... to previous page if defined; otherwise to blog page
            if (previous === undefined)  {
                ctrl.back = 'blog';
            } else {
                ctrl.back = previous.urlPath;
            }

            if (next.params.id !== undefined) {
                ctrl.id = next.params.id;
                ctrl.blogPost = quBlogFactory.blogResource.get({id:ctrl.id});
            }
        };
    }

    module.component('quBlogPost', {
        templateUrl: 'app/blog/quBlogPost.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', controller],
    });

})();
(function() {
    'use strict';

    angular.module('app').factory('quBlogStatusFactory',
    ['$resource',
    function($resource) {
        var blogStatusResource = $resource('/api/blogStatus/:id',
            {id:'@id', isArray:true}
        );
        return blogStatusResource;
    }]);
})();
(function() {
    'use strict';
    var module = angular.module('app');

    function shorten(val)  {
            var matches = val.match('^<p>(.*?)</p><p>(.*?)</p>');

            if (matches !== null)  {
                return matches[0];
            } else {
                return val;
            }
    }

    module.filter('quShortenBlog', function() {

        return function (values)  {
            var blogs = [];
            var post = {};
            angular.forEach(values, function(v, k) {
                post._id = v._id;
                post.title = v.title;
                post.datePosted = v.datePosted;
                post.summary = v.summary;
                post.category = v.category;
                post.post = shorten(v.post);
                blogs.push(post);
                post = {};
            });
            return blogs;
        }
    });
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, extNotifierSvc, $filter) {
        var ctrl = this;

        ctrl.$onInit = function() {
           quBlogFactory.maxResource.query(
               function(result) {
                    ctrl.post = $filter('quShortenBlog')(result)[0];
                    console.log(result);
               },
               function(err) {
                   extNotifierSvc.errorMsg('An error occurred while loading the most recent blog post');
                   console.log(err);
                });
        };
    }

    module.component('quTopPost', {
        templateUrl: 'app/blog/quTopPost.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', 'extNotifierSvc', '$filter', controller]
    });

})();
(function() {
  var toastr;
  angular.module('app').value('quToastr', toastr);

  angular.module('app').factory('quNotifier', ['quToastr',function(quToastr) {

    function successMsg(msg) {
      quToastr.success(msg);
      console.log(msg);
    }

    function warningMsg(msg) {
      quToastr.warning(msg);
      console.log(msg);
    }

    function infoMsg(msg) {
        quToastr.info(msg);
        console.log(msg);
    }

    function errorMsg(msg) {
        quToastr.error(msg);
        console.log(msg);
    }

    return {
        successMsg: successMsg,
        warningMsg: warningMsg,
        infoMsg: infoMsg,
        errorMsg: errorMsg
    }
  }]);
})()

(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {

    }

    module.component('quDemo', {
        templateUrl: 'app/demo/quDemo.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller() {
        var vm = this;
    }

    module.component('quHome', {
        templateUrl: 'app/home/quHome.html',
        controllerAs: 'ctrl',
        controller: [controller]
    });

})();
(function() {
    'use strict';
    //$resource(url, [paramDefaults], [actions], options);
    angular.module('app').factory('quMenuFactory',
        ['$resource',
        function($resource) {
            var menuResource = $resource('/api/menu/:memberOfMenu', {memberOfMenu:'@memberOfMenu', isArray:true});
            return menuResource;
        }
    ]);
})();
(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quUserFactory, extNotifierSvc) {
        var ctrl = this;

        ctrl.doRegister = function(registration) {
            quUserFactory.UserResource.save(registration,
                function(response) {
                    extNotifierSvc.successMsg('New user registered for qumlative.io');
                    ctrl.$router.navigate(['Registered']);
                },
                function(err) {
                    extNotifierSvc.errorMsg('An error occurred during the user registration process.  Please refresh and try again.');
                    console.log(err);
                }
            );

        };

        ctrl.doCancel = function()  {
            ctrl.$router.navigate(['Home']);
        };
    }

    module.component('quRegister', {
        templateUrl: 'app/register/quRegister.html',
        controllerAs: 'ctrl',
        controller: ['quUserFactory', 'extNotifierSvc', controller],
        bindings: {
            '$router': '<',
            doRegister: '&'
        }
    });

})();
angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/appContent.html','<div class=container-fluid><ext-login class=pull-right user=ctrl.currentUser do-login="ctrl.doLogin(username, password)" do-log-out=ctrl.doLogOut()></ext-login><ext-header menu-items=ctrl.menuItems heading=ctrl.heading brand=ctrl.brand></ext-header></div><div class=container><ng-outlet></ng-outlet></div><div class=container-fluid><ext-footer><p class=text-muted>&copy;Qumlative 2016 - Michael Qualls</p><div><a href=https://twitter.com/qumlative data-show-count=false><i class="fa fa-twitter-square fa-2x" aria-hidden=true></i></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></div><p class=text-muthed><a ng-link="[\'Privacy\']">Privacy Policy</a></p></ext-footer></div>');
$templateCache.put('app/about/quAbout.html','<div class="panel panel-info"><div class=panel-heading><h2>About Qumlative</h2></div><div class=panel-body><div class="panel panel-default"><div class=panel-body><div class=col-md-6><p class=lead>Recently, most of my time at work is spent on DevOps tasks ...</p><p>I attend meetings, build work breakdown structures, manage projects, put together documentation, manage repositories & rollouts, etc ... I pretty much do everything except what I most enjoy doing: coding. It seems that this is the natural career progression for a guy in his mid-40\'s that was around when the Internet first exploded.</p><p>So, I decided to start building more things on my own. To scratch that itch. I also decided to throw up this site to document the things I work on.</p><p>I will probably (most likely) throw in some editorials from time to time and discuss some of the causes I support. But, mostly, this is the dumping ground for the results of my tinkering, research and experimentation.</p></div><div class=col-md-6><div class=col-sm-5><img src=/content/img/me_xmas2015.jpg alt class="thumbnail img-responsive"></div><div class=col-sm-7><h4>Michael Qualls</h4><ul><li>AngularJS & .NET Developer</li><li>Mean Stack Tinkerer</li><li>NodeJS Enthusiast</li></ul><p>In general, I am a programming technology enthusiast. Even though the majority of my professional work is with the .NET stack, I enjoy open source and that is where I work in my spare time. Javascript is probably my favorite language, but my job is mostly about C#.</p><p class="text-center text-info"><a href=https://twitter.com/qumlative data-show-count=false><i class="fa fa-twitter-square fa-3x" aria-hidden=true></i></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></p></div></div></div></div></div></div>');
$templateCache.put('app/account/quAccount.html','<qu-user-account user=ctrl.currentUser do-cancel=ctrl.doCancel() do-password-update=ctrl.updateUserPassword(passwordUpdate)></qu-user-account>');
$templateCache.put('app/account/quUserAccount.html','<form id=ctrl.frmPasswordUpd name=ctrl.frmPasswordUpd ng-submit=ctrl.callParentUpdPassword() novalidate><div class="panel panel-default"><div class=panel-heading><h2>Account Settings</h2></div><div class=panel-body><div class=col-sm-3></div><div class=col-sm-6><table class="table table-bordered"><tr class=info><th>Key</th><th>Value</th></tr><tr><td>Registered Name</td><td>{{ctrl.user.firstName}} {{ctrl.user.lastName}}</td></tr><tr><td>User Name</td><td>{{ctrl.user.username}}</td></tr><tr><td>Email</td><td>{{ctrl.user.emailAddress}}</td></tr></table><div class=form-group ng-class="{\'has-error\':ctrl.frmPasswordUpd.password.$invalid && (ctrl.frmPasswordUpd.$submitted || ctrl.frmPasswordUpd.password.$touched)}"><label class=control-label for=password>Password</label> <input type=password class=form-control id=password name=password placeholder="Enter password" ng-model=ctrl.passwordUpdate.password required ng-minlength=8 ng-maxlength=15> <span class="help-block has-error" ng-show="ctrl.password.$submitted || ctrl.frmPasswordUpd.password.$touched"><span ng-show=ctrl.frmPasswordUpd.password.$invalid>A password between 8 and 15 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmPasswordUpd.passwordRepeat.$invalid && (ctrl.frmPasswordUpd.$submitted || ctrl.frmPasswordUpd.passwordRepeat.$touched)}"><label class=control-label for=passwordRepeat>Confirm Password</label> <input type=password class=form-control id=passwordRepeat name=passwordRepeat placeholder="Confirm password" ng-model=ctrl.passwordUpdate.passwordRepeat required compare-to=ctrl.passwordUpdate.password> <span class="help-block has-error" ng-show="ctrl.frmPasswordUpd.passwordRepeat.$submitted || ctrl.frmPasswordUpd.passwordRepeat.$touched"><span ng-show=ctrl.frmPasswordUpd.passwordRepeat.$invalid>You must confirm your password - passwords do not match</span></span></div></div><div class=col-sm-3></div></div><div class="panel-footer text-right"><div class=button-group><button ng-disabled=ctrl.frmPasswordUpd.$invalid type=submit class="btn btn-primary">Submit</button> <button ng-click=ctrl.callParentCancel() class="btn btn-default">Cancel</button></div></div></div></form>');
$templateCache.put('app/admin/quAdmin.html','<div class="panel panel-default"><div class=panel-heading><h2>Qumlative Admin</h2></div><div class=panel-body><ul><li><a ng-link="[\'BlogAdmin\']" href>Blog Administration</a></li><li><a ng-link="[\'UserAdmin\']" href>User Administration</a></li></ul></div></div>');
$templateCache.put('app/blog/quBlog.html','<div class=row><div class=col-md-12><div class="well well-sm"><h2>{{ctrl.title}}</h2></div></div><div class=col-md-8><ext-pager page=ctrl.pageModel.page page-size=ctrl.pageModel.pageSize total-records=ctrl.pageModel.totalRecords do-navigate-next=ctrl.NavNextPage() do-navigate-prev=ctrl.NavPrevPage()><div class="panel panel-info" ng-repeat="blog in ctrl.blogs | orderBy:\'-datePosted\'"><div class="panel-heading border-left"><div class=pull-right>{{blog.datePosted | date}}</div><h4>{{blog.title}}</h4></div><div class=panel-body><span ng-bind-html=blog.post></span></div><div class=panel-footer><div class=row><div class=col-md-12><div class=pull-right><a ng-link="[\'BlogPost\',{id:blog._id}]" href=# class="btn btn-info">Read More <i class="fa fa-chevron-right" aria-hidden=true></i></a></div>Category: {{blog.category}}</div></div></div></div><ext-pager page=ctrl.pageModel.page page-size=ctrl.pageModel.pageSize total-records=ctrl.pageModel.totalRecords do-navigate-next=ctrl.NavNextPage() do-navigate-prev=ctrl.NavPrevPage()></ext-pager></ext-pager></div><div class=col-md-4><div class="panel panel-default"><div class=panel-heading><h4>Categories</h4></div><div class=panel-body><ul class=list-group><li class=list-group-item ng-repeat="cat in ctrl.catCounts"><span class=badge>{{cat.total}}</span> <a ng-link="[\'BlogsForCat\',{category:cat._id}]" href=#>{{cat._id}}</a></li></ul></div></div></div></div>');
$templateCache.put('app/blog/quBlogPost.html','<div class=row><div class=col-md-12><div class="panel panel-info"><div class="panel-heading border-left"><div class=pull-right>{{ctrl.blogPost.datePosted | date}}</div><h2>{{ctrl.blogPost.title}}</h2></div><div class=panel-body><span ng-bind-html=ctrl.blogPost.post></span></div><div class=panel-footer><div class=row><div class=col-md-12><div class=pull-right><a ng-href=#{{ctrl.back}} class="btn btn-info"><i class="fa fa-chevron-left" aria-hidden=true></i> Return to Blogs</a></div>Category: {{ctrl.blogPost.category}}</div></div></div></div></div></div>');
$templateCache.put('app/blog/quTopPost.html','<div class="panel panel-info"><div class="panel-heading border-left"><div class=pull-right>{{ctrl.post.datePosted | date}}</div><h4>{{ctrl.post.title}}</h4></div><div class=panel-body><span ng-bind-html=ctrl.post.post></span></div><div class=panel-footer><div class=row><div class=col-md-12><div class=pull-right><a ng-link="[\'BlogPost\',{id:ctrl.post._id}]" href=# class="btn btn-info">Read More <i class="fa fa-chevron-right" aria-hidden=true></i></a></div>Category: {{ctrl.post.category}}</div></div></div></div>');
$templateCache.put('app/demo/quDemo.html','<div class="panel panel-default"><div class=panel-body><h1>Demo Page</h1></div></div>');
$templateCache.put('app/home/quHome.html','<div class=jumbotron><div class=row><div class=col-sm-6><div class="panel panel-default"><div class=panel-body><h2>Qumlative is:</h2><p>My personal site first and foremost. It gives me a place to post samples and demos. Feel free to reuse any code you like.</p></div></div></div><div class=col-sm-6><qu-top-post></qu-top-post></div></div></div><div class=col-sm-2></div><div class=col-sm-10></div>');
$templateCache.put('app/register/quRegister.html','<ext-register router=ctrl.$router do-cancel=ctrl.doCancel() do-register=ctrl.doRegister(registration)></ext-register>');
$templateCache.put('ext-app/footer/extFooter.html','<footer class=footer><div class=container><ng-transclude></ng-transclude></div></footer>');
$templateCache.put('ext-app/header/extHeader.html','<header class=page-header><img ng-if=ctrl.logoSrc class=img-responsive ng-src={{ctrl.logoSrc}}><h1 class=page-header-heading>{{ctrl.heading}}</h1><ext-horizontal-menu menu-items=ctrl.menuItems brand=ctrl.brand></ext-horizontal-menu></header>');
$templateCache.put('ext-app/horizontal-menu/extHorizontalMenu.html','<nav class="navbar navbar-inverse"><div class=container-fluid><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#ext-navbar-collapse-1 aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#>{{ctrl.brand}}</a></div><div class="collapse navbar-collapse" id=ext-navbar-collapse-1><script type=text/ng-template id=horizonlMenuTree><a ng-if="!item.hasChildren" ng-link="{{item.link}}"><i ng-if="item.icon" class="{{item.icon}}" aria-hidden="true"></i> {{item.title}}</a> <a ng-if="item.hasChildren" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i ng-if="item.icon" class="{{item.icon}}" aria-hidden="true"></i> {{item.title}}<span ng-if="item.parentId===0" class="caret"></span></a> <ul ng-if="item.hasChildren" class="dropdown-menu"> <li ng-repeat="item in ctrl.menuItems | filter:{parentId:item.id} | orderBy:[\'position\']" ng-class="{\'dropdown-submenu\':item.hasChildren===1}" ng-include="\'horizonlMenuTree\'"> </li> </ul></script><ul class="nav navbar-nav"><li ng-repeat="item in ctrl.menuItems | filter:{alignment:\'left\'} | orderBy:[\'parentId\',\'position\'] | filter:{parentId:0}" ng-class="{\'dropdown\' : item.hasChildren===1}" ng-include="\'horizonlMenuTree\'"></li></ul><ul class="nav navbar-nav navbar-right"><li ng-repeat="item in ctrl.menuItems | filter:{alignment:\'right\'} | orderBy:[\'parentId\',\'position\'] | filter:{parentId:0}" ng-class="{\'dropdown\' : item.hasChildren===1}" ng-include="\'horizonlMenuTree\'"></li></ul></div></div></nav>');
$templateCache.put('ext-app/login/extLogin.html','<div ng-if=ctrl.user id=extLogin><div class=dropdown><button class="btn btn-default dropdown-toggle" type=button id=extLoginMgtMenu data-toggle=dropdown aria-haspopup=true aria-expanded=true>{{ctrl.user.username}} <span class=caret></span></button><ul class=dropdown-menu aria-labelledby=extLoginMgtMenu><li ng-show=ctrl.isAdmin()><a ng-link="[\'Admin\']">Admin</a></li><li><a ng-link="[\'Account\']">Account</a></li><li ng-click=ctrl.callParentLogout()><a href=#>Logout</a></li></ul></div></div><div ng-if=!ctrl.user id=extLogin><p ng-show=!ctrl.showLoginForm><button ng-click=ctrl.toggleLogin() class="btn btn-default" id=extLoginMgtMenu>Login or Register</button></p><form ng-show=ctrl.showLoginForm class=navbar-form id=ctrl.extLoginForm name=ctrl.extLoginForm ng-submit=ctrl.callParentLogin() novalidate><div class=form-group ng-class="{\'has-error\':ctrl.extLoginForm.txtExtLogin.$error.required && ctrl.extLoginForm.txtExtLogin.$touched}"><label class=control-label for=txtExtLogin>Login:</label> <input type=text class=form-control id=txtExtLogin name=txtExtLogin placeholder="user name" ng-model=ctrl.username required></div><div class=form-group ng-class="{\'has-error\':ctrl.extLoginForm.txtExtPassword.$error.required && ctrl.extLoginForm.txtExtPassword.$touched}"><input type=password class=form-control id=txtExtPassword name=txtExtPassword placeholder=password ng-model=ctrl.password required></div><button ng-disabled=ctrl.extLoginForm.$invalid type=submit class="btn btn-small btn-success">Login <i class="fa fa-chevron-circle-right" aria-hidden=true></i></button> <a ng-link="[\'Register\']" class="btn btn-small btn-info">Register <i class="fa fa-check-circle" aria-hidden=true></i></a> <a ng-click=ctrl.toggleLogin() class="btn btn-small btn-default"><i class="fa fa-undo" aria-hidden=true></i></a></form></div>');
$templateCache.put('ext-app/login/extRegister.html','<form id=ctrl.frmRegister name=ctrl.frmRegister ng-submit=ctrl.callParentRegister() novalidate><div class=row><div class=col-md-12><div class="well well-sm"><h4>Register @ Qumlative.io</h4></div></div><div class=col-md-12><div class="well well-sm">If you wish to post comments or ask questions, I ask that you register first ... Nothing onerous and <a ng-link="[\'Privacy\']" href=#>I\'ll never share your information</a> ... I would just like to have some minor control over Web site use.</div></div><div class=col-md-3></div><div class=col-md-6><div class="panel panel-default"><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.firstName.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.firstName.$touched)}"><label class=control-label for=firstName>First Name</label> <small>Chars: {{ctrl.registration.firstName.length || 0}}</small> <input type=text class=form-control id=firstName name=firstName placeholder="First name ... or cool Internet alias" ng-model=ctrl.registration.firstName required ng-minlength=3 ng-maxlength=20> <span class="help-block has-error" ng-show="ctrl.frmRegister.$submitted || ctrl.frmRegister.firstName.$touched"><span ng-show=ctrl.frmRegister.firstName.$invalid>First name between 3 and 20 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.lastName.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.lastName.$touched)}"><label class=control-label for=lastName>Last Name</label> <small>Chars: {{ctrl.registration.lastName.length || 0}}</small> <input type=text class=form-control id=lastName name=lastName placeholder="Enter Last Name" ng-model=ctrl.registration.lastName required ng-minlength=3 ng-maxlength=20> <span class="help-block has-error" ng-show="ctrl.frmRegister.$submitted || ctrl.frmRegister.lastName.$touched"><span ng-show=ctrl.frmRegister.lastName.$invalid>Last name between 3 and 20 characters is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.username.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.username.$touched)}"><label class=control-label for=username>User Name</label> <small>Chars: {{ctrl.registration.username.length || 0}}</small> <input type=text class=form-control id=username name=username placeholder="Enter desired user name" ng-model=ctrl.registration.username required ng-minlength=3 ng-maxlength=20> <span class="help-block has-error" ng-show="ctrl.frmRegister.$submitted || ctrl.frmRegister.username.$touched"><span ng-show=ctrl.frmRegister.username.$invalid>User name between 3 and 20 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.emailAddress.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.emailAddress.$touched)}"><label class=control-label for=emailAddress>Email Address</label> <input type=email class=form-control id=emailAddress name=emailAddress placeholder="Enter email address" ng-model=ctrl.registration.emailAddress required> <span class="help-block has-error" ng-show="ctrl.frmRegister.emailAddress.$submitted || ctrl.frmRegister.emailAddress.$touched"><span ng-show=ctrl.frmRegister.emailAddress.$invalid>Email address is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.password.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.password.$touched)}"><label class=control-label for=password>Password</label> <input type=password class=form-control id=password name=password placeholder="Enter password" ng-model=ctrl.registration.password required ng-minlength=8 ng-maxlength=15> <span class="help-block has-error" ng-show="ctrl.password.$submitted || ctrl.frmRegister.password.$touched"><span ng-show=ctrl.frmRegister.password.$invalid>A password between 8 and 15 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.passwordRepeat.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.passwordRepeat.$touched)}"><label class=control-label for=passwordRepeat>Confirm Password</label> <input type=password class=form-control id=passwordRepeat name=passwordRepeat placeholder="Confirm password" ng-model=ctrl.registration.passwordRepeat required compare-to=ctrl.registration.password> <span class="help-block has-error" ng-show="ctrl.frmRegister.passwordRepeat.$submitted || ctrl.frmRegister.passwordRepeat.$touched"><span ng-show=ctrl.frmRegister.passwordRepeat.$invalid>You must confirm your password - passwords do not match</span></span></div></div><div class="panel-footer text-right"><div class=button-group><button ng-disabled=ctrl.frmRegister.$invalid type=submit class="btn btn-success">Submit</button> <button ng-click=ctrl.callParentCancel() class="btn btn-default">Cancel</button></div></div></div></div><div class=col-md-3></div></div></form>');
$templateCache.put('ext-app/login/extRegisterConfirm.html','<div class=row><div class=col-md-3></div><div class=col-md-6><div class="panel panel-default"><div class="panel-heading text-center"><h1>Registration Successful</h1></div><div class=panel-body><p>A confirmation email has been sent to the email address you entered.</p><br><p>Please follow the instructions on the confirmation.</p><p><a href=# ng-link="[\'Home\']">Continue on to Home Page</a></p></div></div></div><div class=col-md-3></div></div>');
$templateCache.put('ext-app/paging/extPageNext.html','<button ng-click=ctrl.callParentNavigate() class="btn btn-info" ng-class="{\'btn-info\':ctrl.moreRecords, \'btn-default\': !ctrl.moreRecords}" ng-disabled=ctrl.moreRecords>Next <i class="fa fa-chevron-right"></i></button>');
$templateCache.put('ext-app/paging/extPagePrev.html','<button ng-click=ctrl.callParentNavigate() class="btn btn-info" ng-class="{\'btn-info\':ctrl.prevRecords, \'btn-default\': !ctrl.prevRecords}" ng-disabled=!ctrl.prevRecords><i class="fa fa-chevron-left">Prev</i></button>');
$templateCache.put('ext-app/paging/extPager.html','<div class=panel><div class=panel-body><div class=col-sm-4><button ng-if="ctrl.prevRecords==true" ng-click=ctrl.callParentNavPrev() class="btn btn-primary"><i class="fa fa-chevron-left">Prev</i></button> <button ng-if="ctrl.prevRecords==false" class="btn btn-default" disabled><i class="fa fa-chevron-left">Prev</i></button></div><div class="col-sm-4 text-center" style=margin-top:8px;margin-left:-15px;>Page {{ctrl.isoPage}} of {{ctrl.isoPages}}</div><div class="col-sm-4 text-right"><button ng-if="ctrl.moreRecords==true" ng-click=ctrl.callParentNavNext() class="btn btn-primary">Next <i class="fa fa-chevron-right"></i></button> <button ng-if="ctrl.moreRecords==false" class="btn btn-default" disabled>Next <i class="fa fa-chevron-right"></i></button></div></div></div>');
$templateCache.put('ext-app/privacy/extPrivacy.html','<div class="panel panel-info"><div class=panel-heading><h2>Privacy Policy</h2></div><div class=panel-body><p></p><h3>Collection and Use of Information</h3><hr><p></p><p>This site collects personal information, such as your name and email address, when you register. Your personal information will never be shared with any other party. Personal information collected is merely to manage user interaction with the Web site.</p><p>At some point in the future, I may use your email address to send you site-related notices, such as alerts that new articles have been posted. You may opt-out of receiving messages at any time by following the instructions provided in the email. Through your user profile interface, you will also be able to opt-out of notices.</p><p>Even if you are not a registered user of this site, if you email me, I may retain a record of the email communication, including your email address, the content of your email, and my response.<hr></p><div></div></div></div>');
$templateCache.put('ext-app/user/extBan.html','<button class="btn btn-danger" ng-show="ctrl.currentStatus===0" id=btnBanUser ng-click="ctrl.setStatus({ban: 1})" name=btnBanUser>Ban</button> <button class="btn btn-info" ng-show="ctrl.currentStatus===1" id=btnBanUser ng-click="ctrl.setStatus({ ban: 0})" name=btnBanUser>Un-Ban</button>');
$templateCache.put('ext-app/user/extSuspend.html','<button class="btn btn-warning" ng-show="ctrl.currentStatus===0" id=btnSuspendUser ng-click="ctrl.setStatus({suspend: 1})" name=btnSuspendUser>Suspend</button> <button class="btn btn-info" ng-show="ctrl.currentStatus===1" id=btnSuspendUser ng-click="ctrl.setStatus({suspend: 0})" name=btnSuspendUser>Un-Suspend</button>');
$templateCache.put('ext-app/vertical-menu/extVerticalMenu.html','<div id=extSideBarMenu><div><div class=sidebar-nav><div class="navbar navbar-inverse" role=navigation><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.sidebar-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <span class="visible-xs navbar-brand">Sidebar menu</span></div><div class="navbar-collapse collapse sidebar-navbar-collapse"><ul class="nav navbar-nav"><li ng-repeat="item in ctrl.menuItems.menuItems | filter:{alignment:\'left\'} | orderBy:[\'parentId\',\'position\'] | filter:{parentId:0}" ng-class="{\'dropdown\' : item.hasChildren===1}" ng-include="\'verticalMenuTree\'"></li></ul><script type=text/ng-template id=verticalMenuTree><a ng-if="!item.hasChildren" href="#">{{item.title}}</a> <a ng-if="item.hasChildren" href="#" class="dropdown-toggle" data-toggle="dropdown">{{item.title}} <b ng-if="item.parentId===0" class="caret"></b></a> <ul ng-if="item.hasChildren" class="dropdown-menu"> <li ng-repeat="item in ctrl.menuItems.menuItems | filter:{parentId:item.id} | orderBy:[\'position\']" ng-class="{\'dropdown-submenu\':item.hasChildren===1}" ng-include="\'verticalMenuTree\'"> </li> </ul></script></div></div></div></div></div>');
$templateCache.put('app/admin/blog/quAdminCategoryDetail.html','<form novalidate id=ctrl.frmBlogCategory name=ctrl.frmBlogCategory><div class=modal-header><h3 class=modal-title>Add a new Blog Category</h3></div><div class=modal-body><div class=form-group ng-class="{\'has-error\': ctrl.frmBlogCategory.$submitted && ctrl.frmBlogCategory.newBlogCategory.$error.required}"><label class=control-label for=inputProductCode>New Category</label><div><input class=form-control id=newBlogCategory name=newBlogCategory type=text placeholder="Category (required)" ng-model=ctrl.category.category required></div><span class="help-block has-error" ng-show="ctrl.frmBlogCategory.$submitted && ctrl.frmBlogCategory.newBlogCategory.$error.required">Category Name is required</span></div></div><div class=modal-footer><button class="btn btn-primary" ng-click=ctrl.ok()>OK</button> <button class="btn btn-warning" ng-click=ctrl.cancel()>Cancel</button></div></form>');
$templateCache.put('app/admin/blog/quBlogAdmin.html','<div class="panel panel-default"><div class=panel-heading><div class=pull-right><button ng-click=ctrl.newBlogPost() class="btn btn-primary">Add New Post</button> <button ng-click=ctrl.returnToAdmin() class="btn btn-default">Return to Admin</button></div><h4>Blog Administration</h4></div><div class=panel-body><div class="panel panel-info" ng-repeat="blog in ctrl.blogs"><div class=panel-heading>{{blog.title}} @ {{blog.datePosted | date}} In "{{blog.category}}" Category</div><div class=panel-body><div>{{blog.summary}}</div></div><div class="panel-footer text-right"><a href=# ng-link="[\'EditBlog\',{id:blog._id}]" class="btn btn-info">Update</a></div></div></div></div>');
$templateCache.put('app/admin/blog/quBlogAdminDetail.html','<form id=ctrl.frmBlog name=ctrl.frmBlog novalidate><div class=col-lg-12><div class="panel panel-default"><div class=panel-heading><div class=pull-right><button ng-click=ctrl.updateBlogs() class="btn btn-primary">Submit Post</button> <button ng-click=ctrl.returnToAdmin() class="btn btn-default">Cancel</button></div><h4>Add New Blog</h4></div><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogTitle.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogTitle.$touched)}"><label class=control-label for=blotTitle>Title</label> <input type=text class=form-control id=blogTitle name=blogTitle placeholder="Post Title" ng-model=ctrl.blogSchema.title required> <span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogTitle.$touched"><span ng-show=ctrl.frmBlog.blogTitle.$invalid>Blog Title is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogSummary.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogSummary.$touched)}"><label class=control-label for=blogSummary>Summary</label> <small>Chars: {{blogDetail.blog.summary.length || 0}}</small> <input type=text class=form-control id=blogSummary name=blogSummary placeholder="Post Summary" ng-model=ctrl.blogSchema.summary required> <span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogSummary.$touched"><span ng-show=ctrl.frmBlog.blogSummary.$invalid>Blog Summary is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogDate.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogDate.$touched)}"><label class=control-label for=blogDate>Post Date</label> <input type=date class=form-control id=blogDate name=blogDate ng-model=ctrl.blogSchema.datePosted required> <span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogDate.$touched"><span ng-show=ctrl.frmBlog.blogDate.$invalid>Blog Date is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogPost.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogPost.$touched)}"><label class=control-label for=blogPost>Blog Post Content</label><div text-angular id=blogPost name=blogPost ng-model=ctrl.blogSchema.post required></div><span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogPost.$touched"><span ng-show=ctrl.frmBlog.blogPost.$invalid>Blog Post is required.</span></span></div></div></div></div><div class=col-lg-6><div class="panel panel-default"><div class=panel-heading>Blog Category - <small>The category that this post fits into</small></div><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.selectCategory.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.selectCategory.$touched)}"><div class=input-group><select required class=form-control id=selectCategory name=selectCategory ng-model=ctrl.blogSchema.category ng-options="value.category as value.category for (key,value) in ctrl.blogCategories"><option value>Select</option></select><span class=input-group-btn><a ng-click=ctrl.openCategoryModal() href class="btn btn-info">New</a></span></div><span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.selectCategory.$touched"><span ng-show=ctrl.frmBlog.selectCategory.$invalid>Blog Category is required.</span></span></div></div></div></div><div class=col-lg-6><div class="panel panel-default"><div class=panel-heading>Blog Status</div><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogStatuses.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogStatuses.$touched)}"><div class=radio ng-repeat="status in ctrl.blogStatuses"><label><input required type=radio name=blogStatuses id=blogStatuses ng-model=ctrl.blogSchema.status ng-value=status.status> {{status.status}}</label></div><span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogStatuses.$touched"><span ng-show=ctrl.frmBlog.blogStatuses.$invalid>Blog Status is required.</span></span></div></div></div></div></form>');
$templateCache.put('app/admin/user/quUserAdmin.html','<div class="panel panel-default"><div class=panel-heading><div class=pull-right><button ng-click=ctrl.returnToAdmin() class="btn btn-default">Return to Admin</button></div><h4>User Administration</h4></div><div class=panel-body><table class="table table-striped table-bordered"><tr class=info><th>User Name</th><th>Email Address</th><th>Banned</th><th>Suspended</th><th>Action</th></tr><tr ng-class="{danger: user.banned, warning: user.suspended}" ng-repeat="user in ctrl.users"><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.username}}</td><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.emailAddress}}</td><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.banned}}</td><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.suspended}}</td><td><ext-ban current-status=user.banned set-status="ctrl.setBanStatus(user, ban)"></ext-ban><ext-suspend current-status=user.suspended set-status="ctrl.setSuspendStatus(user, suspend)"></ext-suspend></td></tr></table></div></div>{{ctrl.users}}');}]);