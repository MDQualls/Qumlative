var gulp = require('gulp');
var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js'];

gulp.task('js-style', function() {
    return gulp.src(jsFiles)
        .pipe(jsHint())
        .pipe(jsHint.reporter('jshint-stylish',{verbose:true}))
        .pipe(jscs());
});

gulp.task('build-css', function() {
    return gulp.src(['./public/content/css/qumlative.less'])
        .pipe(less({plugins: [autoprefix]}))
        .pipe(gulp.dest('./public/content/css'));
});

gulp.task('inject',['build-css'], function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src([
        './public/content/css/*.css',
        './public/ext-app/**/*Module.js',
        './public/ext-app/**/*.js',
        './public/app/**/*.js'], {read:false});

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/vendor',
        ignorePath: 'public',
    };

    return gulp.src('./*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));

});


gulp.task('watch', function() {
    console.log('Compiling Less');
    gulp.watch('./**/*.less', ['build-css']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']);

gulp.task('serve',['default', 'js-style','inject'], function() {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodemon(options).on('restart', function(ev) {
        console.log('Restarting');
    });
});
