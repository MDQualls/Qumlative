(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory,quIdentity,quCommentFactory,extNotifierSvc,$rootScope) {
        /*jshint validthis: true */
        var ctrl = this;
        var date = new Date().toJSON();
        ctrl.addComment = function(newComment) {
            var comment = {
                commentForId: ctrl.blogPost._id,
                comment: newComment,
                username: ctrl.currentUser.username,
                dateOfComment: date
            };
            quCommentFactory.commentResource.save(comment,function(result) {
                extNotifierSvc.successMsg('New comment succesfully added');
                ctrl.comments.push(comment);
            },function(err) {
                extNotifierSvc.errorMsg('An error occurred while submitting your comment');
            });
        };

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
                ctrl.comments = quCommentFactory.commentForResource.query({forId:ctrl.id});
            }
        };

        $rootScope.$on('login',function() {
            ctrl.currentUser = quIdentity.currentUser();
        });

        ctrl.$onInit = function() {
            ctrl.currentUser = quIdentity.currentUser();
        };
    }

    module.component('quBlogPost', {
        templateUrl: 'app/blog/quBlogPost.html',
        controllerAs: 'ctrl',
        controller: ['quBlogFactory', 'quIdentity', 'quCommentFactory','extNotifierSvc', '$rootScope', controller],
    });

})();