var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulpconfig')();
var browserSync = require('browser-sync');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

var port = process.env.PORT || config.defaultPort;

gulp.task('js-style', function() {
    return gulp.src(config.jsFiles)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish',{verbose:true}));
});

gulp.task('clean', function(done) {
    var delconfig = [].concat(config.build);
    console.log('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig, done);
});

gulp.task('clean-images', function(done) {
    clean(config.build + 'content/img/**/*.*', done);
});

gulp.task('clean-styles', function(done) {
    clean(config.build + 'content/css/**/*.css', done);
});

gulp.task('clean-code', function(done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.build + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js'
    );
    clean(files, done);
});

gulp.task('build-css', function() {
    return gulp.src(config.less)
        .pipe($.plumber())
        .pipe($.less({plugins: [autoprefix]}))
        .pipe(gulp.dest('./public/content/css'));
});

gulp.task('deploy-css', ['clean-styles'], function() {
    return gulp
        .src(config.css)
        .pipe(gulp.dest(config.build + 'content/css'));
});

gulp.task('deploy-images',function() {
    console.log('Deploying images to build');
    return gulp
        .src(config.images)
        .pipe($.imagemin({optimizationLevel:4}))
        .pipe(gulp.dest(config.build + 'content/img'));
});


gulp.task('templatecache', function() {
    console.log('Creating AngularJS template cache');

    return gulp.src(config.html)
            .pipe($.minifyHtml({empty:true}))
            .pipe($.angularTemplatecache(
                config.templateCache.file,
                config.templateCache.options
            ))
            .pipe(gulp.dest(config.temp));
});

gulp.task('wiredep',['templatecache'], function() {
    var wiredep = require('wiredep').stream;
    var options = config.wiredepDefaultOptions();

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.appJs)))
        .pipe(gulp.dest(config.root));
});

gulp.task('inject',['wiredep','build-css'], function() {

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.root));
});

gulp.task('optimize', ['inject'], function() {
    console.log('Optimizing the javascript, css, html');

    var templateCache = config.temp + config.templateCache.file;

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.replacePath('/vendor', '/public/vendor'))    
        .pipe($.inject(gulp.src(templateCache, {read: false}), {
            starttag: '<!-- inject:templates:js -->'
        }))    
        .pipe($.useref())
        .pipe(gulp.dest(config.build)
    );
});

gulp.task('minify-css',['optimize'], function() {
    console.log('Running css-optimize task');

    return gulp
        .src(config.build + '/**/*.css')       
        .pipe($.csso())                
        .pipe(gulp.dest(config.build));
});

gulp.task('minify-uglify-optimize',['minify-css'], function() {
    console.log('Running js-uglify task');

    return gulp
        .src(config.build + '/**/*.js')       
        .pipe($.uglify())                
        .pipe(gulp.dest(config.build));
});

gulp.task('watch-less', function() {
    console.log('Compiling Less');
    gulp.watch([config.less,config.extLess], ['build-css']);  // Watch all the .less files, then run the less task
});

gulp.task('serve-build',['minify-uglify-optimize', 'deploy-images'], function() {
    serve(false);   //production
});

gulp.task('serve-dev',['js-style', 'inject'], function() {
    serve(true);    //dev
});

////////////////////////////////////////////////

function serve(isDev) {
    var options = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV' : isDev ? 'development' : 'production'
        },
        watch: [config.srv]
    };

    return $.nodemon(options)
        .on('start', function() {
            console.log('**** nodemon started');
            startBrowserSync(isDev);
        })
        .on('restart',function(ev) {
            console.log('Restarting');
            setTimeout(function() {
                browserSync.notify('reloading now ...');
                browserSync.reload({stream: false});
            }, config.browserReloadDelay);
        });
}

function clean(path, done) {
    console.log('Cleaning images: ' + $.util.colors.blue(path));
    del(path, done);
}

function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
    console.log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBrowserSync(isDev)  {
    if (browserSync.active) {
        return;
    }

    if (isDev) {
        gulp.watch([config.less,config.extLess], ['build-css'])
            .on('change',function(event) { changeEvent(event); });
    } else {
        gulp.watch([config.less,config.extLess,config.appJs,config.html], ['minify-uglify-optimize', 'css-optimize', browserSync.reload])
            .on('change',function(event) { changeEvent(event); });
    }

    var options = {
        proxy: 'localhost:' + port,
        port: 3333,
        files: isDev ?  [
            config.pub + '**/*.*',
            '!' + config.less,
            config.css,
            config.extLess
        ] : [],
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 1000
    };

    browserSync(options);
}