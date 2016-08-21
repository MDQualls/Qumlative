(function() {
    'use strict';

    var module = angular.module('app');

    function controller(quBlogFactory, quBlogCategoryFactory, extNotifierSvc, $filter) {
        /*jshint validthis: true */
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
                console.log(ctrl.blogs);
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