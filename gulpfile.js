var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulpconfig')();

var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
var nodemon = require('gulp-nodemon');
var gulpif = require('gulp-if');
var gulpprint = require('gulp-print');
var plumber = require('gulp-plumber');
var wiredep = require('wiredep').stream;
var gulpinject = require('gulp-inject');

var port = process.env.PORT || config.defaultPort;

gulp.task('js-style', function() {
    return gulp.src(config.jsFiles)
        .pipe(gulpif(args.verbose, gulpprint()))
        .pipe(jscs())
        .pipe(jsHint())
        .pipe(jsHint.reporter('jshint-stylish',{verbose:true}));
});

gulp.task('build-css', function() {
    return gulp.src(config.less)
        .pipe(plumber())
        .pipe(less({plugins: [autoprefix]}))
        .pipe(gulp.dest('./public/content/css'));
});


gulp.task('wiredep', function() {
    var options = config.wiredepDefaultOptions();

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(gulpinject(gulp.src(config.appJs)))
        .pipe(gulp.dest(config.root));
});

gulp.task('inject',['wiredep','build-css'], function() {

    return gulp
        .src(config.index)
        .pipe(gulpinject(gulp.src(config.css)))
        .pipe(gulp.dest(config.root));
});

gulp.task('watch', function() {
    console.log('Compiling Less');
    gulp.watch(config.less, ['build-css']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']);

gulp.task('serve',['default', 'js-style', 'inject'], function() {
    var isDev = true;

    var options = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV' : isDev ? 'development' : 'production'
        },
        watch: [config.srv]
    };

    return nodemon(options).on('restart', function(ev) {
        console.log('Restarting');
    });
});