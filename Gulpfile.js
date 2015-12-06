/**
 * Created by novica on 6.12.15..
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src('/src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
   gulp.watch('/src/**/*.js', ['jshint']);
});

gulp.task('default', ['watch'], function() {
    return gutil.log('Gulp is running!');
});
