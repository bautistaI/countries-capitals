var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('connect', function() {
  connect.server({
      root: 'app/',
      port: 8080
  });
});


// Default Task
gulp.task('default', ['connect']);