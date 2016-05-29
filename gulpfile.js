'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('./**/*.sass', ['sass']);
});

gulp.task('default', ['sass','watch']);