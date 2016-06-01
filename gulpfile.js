// grab our gulp packagesvar
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');

// create a default task and just log a message
gulp.task('default', function() {
     return gutil.log('Gulp is running!')
});

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src(['./*.html'])
    .pipe(wiredep({bowerJson: require('./bower.json')}))
	.pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
	  port: 9090,
	  fallback: 'index.html'
    }));
});
