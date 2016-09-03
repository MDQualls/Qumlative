(function() {
    'use strict';

    module.exports = function() {
        var pub = './public/';
        var ext = pub + 'ext-app/';
        var cssPath = pub + 'content/css/';
        var srv = './server/';
        var root = './';
        var temp = './temp/';
        var build = root + 'build/';
        var config = {

            //server default port
            defaultPort: 3000,

            //file paths - alphabetic
            appJs: [
                pub + 'ext-app/**/*Module.js',
                pub + 'ext-app/**/*Cmpnt.js',
                pub + 'app/core/*.js',
                pub + 'app/app.js',
                pub + 'app/**/*.js'
            ],
            build: build,
            buildCss: build + '**/*.css',
            buildCssPath: build + 'styles/',
            css: cssPath + 'qumlative.css',
            cssPath: cssPath,
            ext: ext,
            extLess: ext + '**/*.less',
            html: pub + '**/*.html',
            less: [cssPath + 'qumlative.less'],
            images: pub + 'content/img/**/*.*',
            index: root + 'index.html',
            jsFiles: [pub + 'app/**/*.js',pub + 'ext-app/**/*.js',srv + '**/*.js'],
            nodeServer: root +  'server.js',
            pub: pub,
            root: root,
            srv: srv,
            temp: temp,
            vendorPath: pub + '/vendor',

            /**
             * package locations
             */
            packages : [
                './package.json',
                './bower.json'
            ],

            /**
             * template cache
             */
            templateCache: {
                file: 'templates.js',
                options: {
                    module: 'app.core',
                    standAlone: false,
                    root: ''
                }
            },

            /**
             * browersync settings
             */
            browserReloadDelay: 1000,

            /**
             * ftp settings
             */
            ftp: {
                user: 'bitnami',
                host: '54.175.35.131',
                remotePath: '/opt/bitnami/apps/qumlative/htdocs/build',
                key: {
                    location: root + 'z4zzr4st3rdr4g0n.pem'
                }
            }
        };

        config.wiredepDefaultOptions = function() {
            var options = {
                bowerJson: require('./bower.json'),
                directory: './public/vendor',
                ignorePath: ['public'],
                exclude: ['angular-sanitize']
            };
            return options;
        };

        return config;
    };
})();