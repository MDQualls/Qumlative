
(function()  {
//'ngStorage',
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
        'extUtilModule'
    ]);

angular.module('app').value('$routerRootComponent', 'appController');

})();
