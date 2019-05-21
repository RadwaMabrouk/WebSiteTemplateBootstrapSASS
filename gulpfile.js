var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', gulp.series('sass'));
});
 
gulp.task('defualt', function () {
  gulp.watch('./scss/*.scss', gulp.series('sass'));
});
