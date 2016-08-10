(function() {
    'use strict';

    module.exports = function() {
        var pub = './public/';
        var cssPath = pub + 'content/css/';
        var srv = './server/';
        var root = './';
        var config = {
            //all js files to be linted
            jsFiles: [pub + 'app/**/*.js',pub + 'ext-app/**/*.js',srv + '**/*.js'],
            appJs: [pub + 'ext-app/**/*Module.js', pub + 'ext-app/**/*Cmpnt.js', pub + 'app/app.js', pub + 'app/**/*.js'],
            less: [pub + 'content/css/qumlative.less'],
            index: './index.html',
            root: root,
            css: cssPath + 'qumlative.css',
            defaultPort: 5000,
            srv: srv,
            nodeServer: root +  'server.js'
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