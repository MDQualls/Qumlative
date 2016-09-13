angular.module('app.core').run(['$templateCache', function($templateCache) {$templateCache.put('app/appContent.html','<div class=container-fluid><ext-login class=pull-right user=ctrl.currentUser do-login="ctrl.doLogin(username, password)" do-log-out=ctrl.doLogOut()></ext-login><ext-header menu-items=ctrl.menuItems heading=ctrl.heading brand=ctrl.brand></ext-header></div><div class=container><ng-outlet></ng-outlet></div><div class=container-fluid><ext-footer><p class=text-muted>&copy;Qumlative 2016 - Michael Qualls</p><div><a href=https://twitter.com/qumlative data-show-count=false><i class="fa fa-twitter-square fa-2x" aria-hidden=true></i></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></div><p class=text-muthed><a ng-link="[\'Privacy\']">Privacy Policy</a></p></ext-footer></div>');
$templateCache.put('app/about/quAbout.html','<div class="panel panel-info"><div class=panel-heading><h2>About Qumlative</h2></div><div class=panel-body><div class="panel panel-default"><div class=panel-body><div class=col-md-6><p class=lead>Recently, most of my time at work is spent on DevOps tasks ...</p><p>I attend meetings, build work breakdown structures, manage projects, put together documentation, manage repositories & rollouts, etc ... I pretty much do everything except what I most enjoy doing: coding. It seems that this is the natural career progression for a guy in his mid-40\'s that was around when the Internet first exploded.</p><p>So, I decided to start building more things on my own. To scratch that itch. I also decided to throw up this site to document the things I work on.</p><p>I will probably (most likely) throw in some editorials from time to time and discuss some of the causes I support. But, mostly, this is the dumping ground for the results of my tinkering, research and experimentation.</p></div><div class=col-md-6><div class=col-sm-5><img src=/content/img/me_xmas2015.jpg alt class="thumbnail img-responsive"></div><div class=col-sm-7><h4>Michael Qualls</h4><ul><li>AngularJS & .NET Developer</li><li>Mean Stack Tinkerer</li><li>NodeJS Enthusiast</li></ul><p>In general, I am a programming technology enthusiast. Even though the majority of my professional work is with the .NET stack, I enjoy open source and that is where I work in my spare time. Javascript is probably my favorite language, but my job is mostly about C#.</p><p class="text-center text-info"><a href=https://twitter.com/qumlative data-show-count=false><i class="fa fa-twitter-square fa-3x" aria-hidden=true></i></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></p></div></div></div></div></div></div>');
$templateCache.put('app/account/quAccount.html','<qu-user-account user=ctrl.currentUser do-cancel=ctrl.doCancel() do-password-update=ctrl.updateUserPassword(passwordUpdate)></qu-user-account>');
$templateCache.put('app/account/quUserAccount.html','<form id=ctrl.frmPasswordUpd name=ctrl.frmPasswordUpd ng-submit=ctrl.callParentUpdPassword() novalidate><div class="panel panel-default"><div class=panel-heading><h2>Account Settings</h2></div><div class=panel-body><div class=col-sm-3></div><div class=col-sm-6><table class="table table-bordered"><tr class=info><th>Key</th><th>Value</th></tr><tr><td>Registered Name</td><td>{{ctrl.user.firstName}} {{ctrl.user.lastName}}</td></tr><tr><td>User Name</td><td>{{ctrl.user.username}}</td></tr><tr><td>Email</td><td>{{ctrl.user.emailAddress}}</td></tr></table><div class=form-group ng-class="{\'has-error\':ctrl.frmPasswordUpd.password.$invalid && (ctrl.frmPasswordUpd.$submitted || ctrl.frmPasswordUpd.password.$touched)}"><label class=control-label for=password>Password</label> <input type=password class=form-control id=password name=password placeholder="Enter password" ng-model=ctrl.passwordUpdate.password required ng-minlength=8 ng-maxlength=15> <span class="help-block has-error" ng-show="ctrl.password.$submitted || ctrl.frmPasswordUpd.password.$touched"><span ng-show=ctrl.frmPasswordUpd.password.$invalid>A password between 8 and 15 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmPasswordUpd.passwordRepeat.$invalid && (ctrl.frmPasswordUpd.$submitted || ctrl.frmPasswordUpd.passwordRepeat.$touched)}"><label class=control-label for=passwordRepeat>Confirm Password</label> <input type=password class=form-control id=passwordRepeat name=passwordRepeat placeholder="Confirm password" ng-model=ctrl.passwordUpdate.passwordRepeat required compare-to=ctrl.passwordUpdate.password> <span class="help-block has-error" ng-show="ctrl.frmPasswordUpd.passwordRepeat.$submitted || ctrl.frmPasswordUpd.passwordRepeat.$touched"><span ng-show=ctrl.frmPasswordUpd.passwordRepeat.$invalid>You must confirm your password - passwords do not match</span></span></div></div><div class=col-sm-3></div></div><div class="panel-footer text-right"><div class=button-group><button ng-disabled=ctrl.frmPasswordUpd.$invalid type=submit class="btn btn-primary">Submit</button> <button ng-click=ctrl.callParentCancel() class="btn btn-default">Cancel</button></div></div></div></form>');
$templateCache.put('app/admin/quAdmin.html','<div class="panel panel-default"><div class=panel-heading><h2>Qumlative Admin</h2></div><div class=panel-body><ul><li><a ng-link="[\'BlogAdmin\']" href>Blog Administration</a></li><li><a ng-link="[\'UserAdmin\']" href>User Administration</a></li></ul></div></div>');
$templateCache.put('app/blog/quBlog.html','<div class=row><div class=col-md-12><div class="well well-sm"><h2>{{ctrl.title}}</h2></div></div><div class=col-md-8><div class="panel panel-info" ng-repeat="blog in ctrl.blogs | orderBy:\'-datePosted\'"><div class="panel-heading border-left"><div class=pull-right>{{blog.datePosted | date}}</div><h4>{{blog.title}}</h4></div><div class=panel-body><span ng-bind-html=blog.post></span></div><div class=panel-footer><div class=row><div class=col-md-12><div class=pull-right><a ng-link="[\'BlogPost\',{id:blog._id}]" href=# class="btn btn-info">Read More <i class="fa fa-chevron-right" aria-hidden=true></i></a></div>Category: {{blog.category}}</div></div></div></div><ext-pager page=ctrl.pageModel.page page-size=ctrl.pageModel.pageSize total-records=ctrl.pageModel.totalRecords do-navigate-next=ctrl.NavNextPage() do-navigate-prev=ctrl.NavPrevPage()></ext-pager></div><div class=col-md-4><div class="panel panel-default"><div class=panel-heading><h4>Categories</h4></div><div class=panel-body><ul class=list-group><li class=list-group-item ng-repeat="cat in ctrl.catCounts"><span class=badge>{{cat.total}}</span> <a ng-link="[\'BlogsForCat\',{category:cat._id}]" href=#>{{cat._id}}</a></li></ul></div></div></div></div>');
$templateCache.put('app/blog/quBlogPost.html','<div class=row><div class=col-md-12><div class="panel panel-info"><div class="panel-heading border-left"><div class=pull-right>{{ctrl.blogPost.datePosted | date}}</div><h2>{{ctrl.blogPost.title}}</h2></div><div class=panel-body><span ng-bind-html=ctrl.blogPost.post></span></div><div class=panel-footer><div class=row><div class=col-md-12><div class=pull-right><a ng-href=#{{ctrl.back}} class="btn btn-info"><i class="fa fa-chevron-left" aria-hidden=true></i> Return to Blogs</a></div>Category: {{ctrl.blogPost.category}}</div></div></div></div></div></div>');
$templateCache.put('app/blog/quTopPost.html','<div class="panel panel-info"><div class="panel-heading border-left"><div class=pull-right>{{ctrl.post.datePosted | date}}</div><h4>{{ctrl.post.title}}</h4></div><div class=panel-body><span ng-bind-html=ctrl.post.post></span></div><div class=panel-footer><div class=row><div class=col-md-12><div class=pull-right><a ng-link="[\'BlogPost\',{id:ctrl.post._id}]" href=# class="btn btn-info">Read More <i class="fa fa-chevron-right" aria-hidden=true></i></a></div>Category: {{ctrl.post.category}}</div></div></div></div>');
$templateCache.put('app/demo/quDemo.html','<div class="panel panel-default"><div class=panel-body><h1>Demo Page</h1></div></div>');
$templateCache.put('app/home/quHome.html','<div class=jumbotron><div class=row><div class=col-sm-6><div class="panel panel-default"><div class=panel-body><h2>Qumlative is:</h2><p>Not a \'how to\' site; this is more of a \'how I did it\' site. It is my place to post samples and demos. It is a place to deploy to when I am done building and testing. Feel free to reuse any code you like.</p></div></div><div class="panel panel-default"><div class=panel-heading><h4>Upcoming features:</h4></div><div class=panel-body><ul class=list-unstyled><li><i class="fa fa-cog" aria-hidden=true></i> Comment system</li><li><i class="fa fa-cog" aria-hidden=true></i> Qumlative Q & A</li><li><i class="fa fa-cog" aria-hidden=true></i> Twitter integration</li></ul></div></div></div><div class=col-sm-6><qu-top-post></qu-top-post></div></div></div><div class=col-sm-2></div><div class=col-sm-10></div>');
$templateCache.put('app/register/quRegister.html','<ext-register router=ctrl.$router do-cancel=ctrl.doCancel() do-register=ctrl.doRegister(registration)></ext-register>');
$templateCache.put('ext-app/footer/extFooter.html','<footer class=footer><div class=container><ng-transclude></ng-transclude></div></footer>');
$templateCache.put('ext-app/header/extHeader.html','<header class=page-header><img ng-if=ctrl.logoSrc class=img-responsive ng-src={{ctrl.logoSrc}}><h1 class=page-header-heading>{{ctrl.heading}}</h1><ext-horizontal-menu menu-items=ctrl.menuItems brand=ctrl.brand></ext-horizontal-menu></header>');
$templateCache.put('ext-app/horizontal-menu/extHorizontalMenu.html','<nav class="navbar navbar-inverse"><div class=container-fluid><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#ext-navbar-collapse-1 aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#>{{ctrl.brand}}</a></div><div class="collapse navbar-collapse" id=ext-navbar-collapse-1><script type=text/ng-template id=horizonlMenuTree><a ng-if="!item.hasChildren" ng-link="{{item.link}}"><i ng-if="item.icon" class="{{item.icon}}" aria-hidden="true"></i> {{item.title}}</a> <a ng-if="item.hasChildren" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i ng-if="item.icon" class="{{item.icon}}" aria-hidden="true"></i> {{item.title}}<span ng-if="item.parentId===0" class="caret"></span></a> <ul ng-if="item.hasChildren" class="dropdown-menu"> <li ng-repeat="item in ctrl.menuItems | filter:{parentId:item.id} | orderBy:[\'position\']" ng-class="{\'dropdown-submenu\':item.hasChildren===1}" ng-include="\'horizonlMenuTree\'"> </li> </ul></script><ul class="nav navbar-nav"><li ng-repeat="item in ctrl.menuItems | filter:{alignment:\'left\'} | orderBy:[\'parentId\',\'position\'] | filter:{parentId:0}" ng-class="{\'dropdown\' : item.hasChildren===1}" ng-include="\'horizonlMenuTree\'"></li></ul><ul class="nav navbar-nav navbar-right"><li ng-repeat="item in ctrl.menuItems | filter:{alignment:\'right\'} | orderBy:[\'parentId\',\'position\'] | filter:{parentId:0}" ng-class="{\'dropdown\' : item.hasChildren===1}" ng-include="\'horizonlMenuTree\'"></li></ul></div></div></nav>');
$templateCache.put('ext-app/login/extLogin.html','<div ng-if=ctrl.user id=extLogin><div class=dropdown><button class="btn btn-default dropdown-toggle" type=button id=extLoginMgtMenu data-toggle=dropdown aria-haspopup=true aria-expanded=true>{{ctrl.user.username}} <span class=caret></span></button><ul class=dropdown-menu aria-labelledby=extLoginMgtMenu><li ng-show=ctrl.isAdmin()><a ng-link="[\'Admin\']">Admin</a></li><li><a ng-link="[\'Account\']">Account</a></li><li ng-click=ctrl.callParentLogout()><a href=#>Logout</a></li></ul></div></div><div ng-if=!ctrl.user id=extLogin><p ng-show=!ctrl.showLoginForm><button ng-click=ctrl.toggleLogin() class="btn btn-default" id=extLoginMgtMenu>Login or Register</button></p><form ng-show=ctrl.showLoginForm class=navbar-form id=ctrl.extLoginForm name=ctrl.extLoginForm ng-submit=ctrl.callParentLogin() novalidate><div class=form-group ng-class="{\'has-error\':ctrl.extLoginForm.txtExtLogin.$error.required && ctrl.extLoginForm.txtExtLogin.$touched}"><label class=control-label for=txtExtLogin>Login:</label> <input type=text class=form-control id=txtExtLogin name=txtExtLogin placeholder="user name" ng-model=ctrl.username required></div><div class=form-group ng-class="{\'has-error\':ctrl.extLoginForm.txtExtPassword.$error.required && ctrl.extLoginForm.txtExtPassword.$touched}"><input type=password class=form-control id=txtExtPassword name=txtExtPassword placeholder=password ng-model=ctrl.password required></div><button ng-disabled=ctrl.extLoginForm.$invalid type=submit class="btn btn-small btn-success">Login <i class="fa fa-chevron-circle-right" aria-hidden=true></i></button> <a ng-link="[\'Register\']" class="btn btn-small btn-info">Register <i class="fa fa-check-circle" aria-hidden=true></i></a> <a ng-click=ctrl.toggleLogin() class="btn btn-small btn-default"><i class="fa fa-undo" aria-hidden=true></i></a></form></div>');
$templateCache.put('ext-app/login/extRegister.html','<form id=ctrl.frmRegister name=ctrl.frmRegister ng-submit=ctrl.callParentRegister() novalidate><div class=row><div class=col-md-12><div class="well well-sm"><h4>Register @ Qumlative.io</h4></div></div><div class=col-md-12><div class="well well-sm">If you wish to post comments or ask questions, I ask that you register first ... Nothing onerous and <a ng-link="[\'Privacy\']" href=#>I\'ll never share your information</a> ... I would just like to have some minor control over Web site use.</div></div><div class=col-md-3></div><div class=col-md-6><div class="panel panel-default"><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.firstName.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.firstName.$touched)}"><label class=control-label for=firstName>First Name</label> <small>Chars: {{ctrl.registration.firstName.length || 0}}</small> <input type=text class=form-control id=firstName name=firstName placeholder="First name ... or cool Internet alias" ng-model=ctrl.registration.firstName required ng-minlength=3 ng-maxlength=20> <span class="help-block has-error" ng-show="ctrl.frmRegister.$submitted || ctrl.frmRegister.firstName.$touched"><span ng-show=ctrl.frmRegister.firstName.$invalid>First name between 3 and 20 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.lastName.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.lastName.$touched)}"><label class=control-label for=lastName>Last Name</label> <small>Chars: {{ctrl.registration.lastName.length || 0}}</small> <input type=text class=form-control id=lastName name=lastName placeholder="Enter Last Name" ng-model=ctrl.registration.lastName required ng-minlength=3 ng-maxlength=20> <span class="help-block has-error" ng-show="ctrl.frmRegister.$submitted || ctrl.frmRegister.lastName.$touched"><span ng-show=ctrl.frmRegister.lastName.$invalid>Last name between 3 and 20 characters is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.username.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.username.$touched)}"><label class=control-label for=username>User Name</label> <small>Chars: {{ctrl.registration.username.length || 0}}</small> <input type=text class=form-control id=username name=username placeholder="Enter desired user name" ng-model=ctrl.registration.username required ng-minlength=3 ng-maxlength=20> <span class="help-block has-error" ng-show="ctrl.frmRegister.$submitted || ctrl.frmRegister.username.$touched"><span ng-show=ctrl.frmRegister.username.$invalid>User name between 3 and 20 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.emailAddress.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.emailAddress.$touched)}"><label class=control-label for=emailAddress>Email Address</label> <input type=email class=form-control id=emailAddress name=emailAddress placeholder="Enter email address" ng-model=ctrl.registration.emailAddress required> <span class="help-block has-error" ng-show="ctrl.frmRegister.emailAddress.$submitted || ctrl.frmRegister.emailAddress.$touched"><span ng-show=ctrl.frmRegister.emailAddress.$invalid>Email address is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.password.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.password.$touched)}"><label class=control-label for=password>Password</label> <input type=password class=form-control id=password name=password placeholder="Enter password" ng-model=ctrl.registration.password required ng-minlength=8 ng-maxlength=15> <span class="help-block has-error" ng-show="ctrl.password.$submitted || ctrl.frmRegister.password.$touched"><span ng-show=ctrl.frmRegister.password.$invalid>A password between 8 and 15 characters is required</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmRegister.passwordRepeat.$invalid && (ctrl.frmRegister.$submitted || ctrl.frmRegister.passwordRepeat.$touched)}"><label class=control-label for=passwordRepeat>Confirm Password</label> <input type=password class=form-control id=passwordRepeat name=passwordRepeat placeholder="Confirm password" ng-model=ctrl.registration.passwordRepeat required compare-to=ctrl.registration.password> <span class="help-block has-error" ng-show="ctrl.frmRegister.passwordRepeat.$submitted || ctrl.frmRegister.passwordRepeat.$touched"><span ng-show=ctrl.frmRegister.passwordRepeat.$invalid>You must confirm your password - passwords do not match</span></span></div></div><div class="panel-footer text-right"><div class=button-group><button ng-disabled=ctrl.frmRegister.$invalid type=submit class="btn btn-success">Submit</button> <button ng-click=ctrl.callParentCancel() class="btn btn-default">Cancel</button></div></div></div></div><div class=col-md-3></div></div></form>');
$templateCache.put('ext-app/login/extRegisterConfirm.html','<div class=row><div class=col-md-3></div><div class=col-md-6><div class="panel panel-default"><div class="panel-heading text-center"><h1>Registration Successful</h1></div><div class=panel-body><p>A confirmation email has been sent to the email address you entered.</p><br><p>Please follow the instructions on the confirmation.</p><p><a href=# ng-link="[\'Home\']">Continue on to Home Page</a></p></div></div></div><div class=col-md-3></div></div>');
$templateCache.put('ext-app/paging/extPageNext.html','<button ng-click=ctrl.callParentNavigate() class="btn btn-info" ng-class="{\'btn-info\':ctrl.moreRecords, \'btn-default\': !ctrl.moreRecords}" ng-disabled=ctrl.moreRecords>Next <i class="fa fa-chevron-right"></i></button>');
$templateCache.put('ext-app/paging/extPagePrev.html','<button ng-click=ctrl.callParentNavigate() class="btn btn-info" ng-class="{\'btn-info\':ctrl.prevRecords, \'btn-default\': !ctrl.prevRecords}" ng-disabled=!ctrl.prevRecords><i class="fa fa-chevron-left">&nbsp; Prev</i></button>');
$templateCache.put('ext-app/paging/extPager.html','<div class=panel><div class=panel-body><div class=col-sm-4><button ng-if="ctrl.prevRecords==true" ng-click=ctrl.callParentNavPrev() class="btn btn-primary"><i class="fa fa-chevron-left">&nbsp;Prev</i></button> <button ng-if="ctrl.prevRecords==false" class="btn btn-default" disabled><i class="fa fa-chevron-left">&nbsp;Prev</i></button></div><div class="col-sm-4 text-center" style=margin-top:8px;margin-left:-15px;>Page {{ctrl.isoPage}} of {{ctrl.isoPages}}</div><div class="col-sm-4 text-right"><button ng-if="ctrl.moreRecords==true" ng-click=ctrl.callParentNavNext() class="btn btn-primary">Next <i class="fa fa-chevron-right"></i></button> <button ng-if="ctrl.moreRecords==false" class="btn btn-default" disabled>Next <i class="fa fa-chevron-right"></i></button></div></div></div>');
$templateCache.put('ext-app/privacy/extPrivacy.html','<div class="panel panel-info"><div class=panel-heading><h2>Privacy Policy</h2></div><div class=panel-body><p></p><h3>Collection and Use of Information</h3><hr><p></p><p>This site collects personal information, such as your name and email address, when you register. Your personal information will never be shared with any other party. Personal information collected is merely to manage user interaction with the Web site.</p><p>At some point in the future, I may use your email address to send you site-related notices, such as alerts that new articles have been posted. You may opt-out of receiving messages at any time by following the instructions provided in the email. Through your user profile interface, you will also be able to opt-out of notices.</p><p>Even if you are not a registered user of this site, if you email me, I may retain a record of the email communication, including your email address, the content of your email, and my response.<hr></p><div></div></div></div>');
$templateCache.put('ext-app/user/extBan.html','<button class="btn btn-danger" ng-show="ctrl.currentStatus===0" id=btnBanUser ng-click="ctrl.setStatus({ban: 1})" name=btnBanUser>Ban</button> <button class="btn btn-info" ng-show="ctrl.currentStatus===1" id=btnBanUser ng-click="ctrl.setStatus({ ban: 0})" name=btnBanUser>Un-Ban</button>');
$templateCache.put('ext-app/user/extSuspend.html','<button class="btn btn-warning" ng-show="ctrl.currentStatus===0" id=btnSuspendUser ng-click="ctrl.setStatus({suspend: 1})" name=btnSuspendUser>Suspend</button> <button class="btn btn-info" ng-show="ctrl.currentStatus===1" id=btnSuspendUser ng-click="ctrl.setStatus({suspend: 0})" name=btnSuspendUser>Un-Suspend</button>');
$templateCache.put('ext-app/vertical-menu/extVerticalMenu.html','<div id=extSideBarMenu><div><div class=sidebar-nav><div class="navbar navbar-inverse" role=navigation><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.sidebar-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <span class="visible-xs navbar-brand">Sidebar menu</span></div><div class="navbar-collapse collapse sidebar-navbar-collapse"><ul class="nav navbar-nav"><li ng-repeat="item in ctrl.menuItems.menuItems | filter:{alignment:\'left\'} | orderBy:[\'parentId\',\'position\'] | filter:{parentId:0}" ng-class="{\'dropdown\' : item.hasChildren===1}" ng-include="\'verticalMenuTree\'"></li></ul><script type=text/ng-template id=verticalMenuTree><a ng-if="!item.hasChildren" href="#">{{item.title}}</a> <a ng-if="item.hasChildren" href="#" class="dropdown-toggle" data-toggle="dropdown">{{item.title}} <b ng-if="item.parentId===0" class="caret"></b></a> <ul ng-if="item.hasChildren" class="dropdown-menu"> <li ng-repeat="item in ctrl.menuItems.menuItems | filter:{parentId:item.id} | orderBy:[\'position\']" ng-class="{\'dropdown-submenu\':item.hasChildren===1}" ng-include="\'verticalMenuTree\'"> </li> </ul></script></div></div></div></div></div>');
$templateCache.put('app/admin/blog/quAdminCategoryDetail.html','<form novalidate id=ctrl.frmBlogCategory name=ctrl.frmBlogCategory><div class=modal-header><h3 class=modal-title>Add a new Blog Category</h3></div><div class=modal-body><div class=form-group ng-class="{\'has-error\': ctrl.frmBlogCategory.$submitted && ctrl.frmBlogCategory.newBlogCategory.$error.required}"><label class=control-label for=inputProductCode>New Category</label><div><input class=form-control id=newBlogCategory name=newBlogCategory type=text placeholder="Category (required)" ng-model=ctrl.category.category required></div><span class="help-block has-error" ng-show="ctrl.frmBlogCategory.$submitted && ctrl.frmBlogCategory.newBlogCategory.$error.required">Category Name is required</span></div></div><div class=modal-footer><button class="btn btn-primary" ng-click=ctrl.ok()>OK</button> <button class="btn btn-warning" ng-click=ctrl.cancel()>Cancel</button></div></form>');
$templateCache.put('app/admin/blog/quBlogAdmin.html','<div class="panel panel-default"><div class=panel-heading><div class=pull-right><button ng-click=ctrl.newBlogPost() class="btn btn-primary">Add New Post</button> <button ng-click=ctrl.returnToAdmin() class="btn btn-default">Return to Admin</button></div><h4>Blog Administration</h4></div><div class=panel-body><div class="panel panel-info" ng-repeat="blog in ctrl.blogs"><div class=panel-heading>{{blog.title}} @ {{blog.datePosted | date}} In "{{blog.category}}" Category</div><div class=panel-body><div>{{blog.summary}}</div></div><div class="panel-footer text-right"><a href=# ng-link="[\'EditBlog\',{id:blog._id}]" class="btn btn-info">Update</a></div></div></div></div>');
$templateCache.put('app/admin/blog/quBlogAdminDetail.html','<form id=ctrl.frmBlog name=ctrl.frmBlog novalidate><div class=col-lg-12><div class="panel panel-default"><div class=panel-heading><div class=pull-right><button ng-click=ctrl.updateBlogs() class="btn btn-primary">Submit Post</button> <button ng-click=ctrl.returnToAdmin() class="btn btn-default">Cancel</button></div><h4>Add New Blog</h4></div><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogTitle.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogTitle.$touched)}"><label class=control-label for=blotTitle>Title</label> <input type=text class=form-control id=blogTitle name=blogTitle placeholder="Post Title" ng-model=ctrl.blogSchema.title required> <span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogTitle.$touched"><span ng-show=ctrl.frmBlog.blogTitle.$invalid>Blog Title is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogSummary.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogSummary.$touched)}"><label class=control-label for=blogSummary>Summary</label> <small>Chars: {{blogDetail.blog.summary.length || 0}}</small> <input type=text class=form-control id=blogSummary name=blogSummary placeholder="Post Summary" ng-model=ctrl.blogSchema.summary required> <span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogSummary.$touched"><span ng-show=ctrl.frmBlog.blogSummary.$invalid>Blog Summary is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogDate.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogDate.$touched)}"><label class=control-label for=blogDate>Post Date</label> <input type=date class=form-control id=blogDate name=blogDate ng-model=ctrl.blogSchema.datePosted required> <span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogDate.$touched"><span ng-show=ctrl.frmBlog.blogDate.$invalid>Blog Date is required.</span></span></div><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogPost.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogPost.$touched)}"><label class=control-label for=blogPost>Blog Post Content</label><div text-angular id=blogPost name=blogPost ng-model=ctrl.blogSchema.post required></div><span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogPost.$touched"><span ng-show=ctrl.frmBlog.blogPost.$invalid>Blog Post is required.</span></span></div></div></div></div><div class=col-lg-6><div class="panel panel-default"><div class=panel-heading>Blog Category - <small>The category that this post fits into</small></div><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.selectCategory.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.selectCategory.$touched)}"><div class=input-group><select required class=form-control id=selectCategory name=selectCategory ng-model=ctrl.blogSchema.category ng-options="value.category as value.category for (key,value) in ctrl.blogCategories"><option value>Select</option></select><span class=input-group-btn><a ng-click=ctrl.openCategoryModal() href class="btn btn-info">New</a></span></div><span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.selectCategory.$touched"><span ng-show=ctrl.frmBlog.selectCategory.$invalid>Blog Category is required.</span></span></div></div></div></div><div class=col-lg-6><div class="panel panel-default"><div class=panel-heading>Blog Status</div><div class=panel-body><div class=form-group ng-class="{\'has-error\':ctrl.frmBlog.blogStatuses.$invalid && (ctrl.frmBlog.$submitted || ctrl.frmBlog.blogStatuses.$touched)}"><div class=radio ng-repeat="status in ctrl.blogStatuses"><label><input required type=radio name=blogStatuses id=blogStatuses ng-model=ctrl.blogSchema.status ng-value=status.status> {{status.status}}</label></div><span class="help-block has-error" ng-show="ctrl.frmBlog.$submitted || ctrl.frmBlog.blogStatuses.$touched"><span ng-show=ctrl.frmBlog.blogStatuses.$invalid>Blog Status is required.</span></span></div></div></div></div></form>');
$templateCache.put('app/admin/user/quUserAdmin.html','<div class="panel panel-default"><div class=panel-heading><div class=pull-right><button ng-click=ctrl.returnToAdmin() class="btn btn-default">Return to Admin</button></div><h4>User Administration</h4></div><div class=panel-body><table class="table table-striped table-bordered"><tr class=info><th>User Name</th><th>Email Address</th><th>Banned</th><th>Suspended</th><th>Action</th></tr><tr ng-class="{danger: user.banned, warning: user.suspended}" ng-repeat="user in ctrl.users"><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.username}}</td><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.emailAddress}}</td><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.banned}}</td><td ng-class="{\'text-danger\': user.banned, \'text-warning\': user.suspended}">{{user.suspended}}</td><td><ext-ban current-status=user.banned set-status="ctrl.setBanStatus(user, ban)"></ext-ban><ext-suspend current-status=user.suspended set-status="ctrl.setSuspendStatus(user, suspend)"></ext-suspend></td></tr></table></div></div>{{ctrl.users}}');}]);