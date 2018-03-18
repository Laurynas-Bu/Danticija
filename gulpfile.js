'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');
var concat = require('gulp-concat');
var vfs = require('vinyl-fs');

gulp.task('styles', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        //.pipe(minify())
        .pipe(cssbeautify())
        .pipe(gulp.dest('css/'));
});

gulp.task('js', function () {
   return gulp.src(['js/dev/*.js'])
        .pipe(concat('jscript.js'))
        //.pipe(gulp_minify())
        .pipe(gulp.dest('js/prod/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss', gulp.series('styles'));
    gulp.watch('js/dev/*.js', gulp.series ('js'));
});
