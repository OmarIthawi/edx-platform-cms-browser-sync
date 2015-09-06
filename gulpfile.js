'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var shell = require('gulp-shell');

var edX = function (relativePath) {
    return path.join(process.env.HOME, 'edx-platform', relativePath);
};

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('xmodules', function () {
    // Using `gulpfile.js` just to make it run!
    return gulp.src('gulpfile.js').pipe(shell([
        'bash -himBH "<%= compileXmodules %>"',
        'touch "<%= pythonFile %>"'
    ], {
        templateData: {
            compileXmodules: path.join(process.env.HOME, 'bin/compile_xmodules'),
            pythonFile: edX('cms/urls.py')
        }
    }));
});

gulp.task('serve', function () {
    browserSync.init(null, {
        proxy: "localhost:8001", // This should be already running in a separate command
        open: 'internal',
        host: "localhost",
        port: 8101
    });
});

gulp.task('watch', ['xmodules', 'serve'], function () {
    // Watch for changes
    gulp.watch(edX('lms/templates/video*.html'), reload);
    gulp.watch(edX('common/lib/xmodule/xmodule/js/src/video/*.js'), ['xmodules']);
});

gulp.task('default', ['watch']);
