(function() {
    'use strict';

    module.exports = function() {
        var pub = './public/';
        var ext = pub + 'ext-app/';
        var cssPath = pub + 'content/css/';
        var srv = './server/';
        var root = './';
        var temp = './temp/';
        var config = {

            //server default port
            defaultPort: 5000,

            //file paths - alphabetic
            appJs: [pub + 'ext-app/**/*Module.js', pub + 'ext-app/**/*Cmpnt.js', pub + 'app/app.js',pub + 'app/**/*.js'],
            build: root + 'build/',
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
             * template cache
             */
            templateCache: {
                file: 'templates.js',
                options: {
                    module: 'app',
                    standAlone: false
                }
            },

            /**
             * browersync settings
             */
            browserReloadDelay: 1000
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