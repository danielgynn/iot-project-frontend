var gulp = require('gulp');

// Include Gulp plugins
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

// Watch for changes
gulp.task('default', ['styles'], function() {
  gulp.watch('./public/sass/main.scss', ['styles']);
});

// Task to compile Sass file into CSS, and minify CSS into build directory
gulp.task('styles', function() {
  gulp.src('./public/sass/main.scss')
    .pipe(sass({includePaths: ['./public/sass/partials']}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/stylesheets'));
});
