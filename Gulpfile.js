/**
 * Created by novica on 6.12.15..
 */

var gulp = require('gulp'),
    config = require('./gulp.config')(),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    server = require('gulp-express'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    tsProject = ts.createProject('tsconfig.json');

gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

gulp.task('scripts', function() {
    var sourceTsFiles = [
        config.allTs,
        config.typings
    ];
    
    var tsResult = gulp.src(sourceTsFiles)
                    .pipe(sourcemaps.init())
                    .pipe(ts(tsProject));
                    
    return tsResult.js
                  .pipe(sourcemaps.write('.'))
                  .pipe(gulp.dest(config.tsOutputPath));
                  
                //   https://www.youtube.com/watch?v=7xOubdqyqaY
});

gulp.task('jshint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', server.notify);
    gulp.watch('src/**/*.css', function(event) {
       server.notify(event); 
    });
    gulp.watch('src/**/*.ts', ['scripts']);
    gulp.watch('src/**/*.js', ['jshint']);
    gulp.watch('src/**/*.js', ['server']);
});

gulp.task('server', function() {
    server.run(['server.js']);
});

gulp.task('serve', ['server', 'scripts', 'jshint', 'watch'], function() {
    return gutil.log('Gulp is running!');
});

gulp.task('default', ['watch'], function() {
    return gutil.log('Gulp is running!');
});
