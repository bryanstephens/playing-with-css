var gulp = require('gulp');
var watch = require('gulp-watch');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./app"
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync'], function() {
  watch("app/css/*.css", function() {
    bs.reload();
  });
  watch("app/**/*.html", function() {
    bs.reload();
  });
});
