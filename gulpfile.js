var gulp  = require('gulp'),
	less  = require('gulp-less'),
	path  = require('path'),
	run   = require('gulp-run'),
	watch = require('gulp-watch');


gulp.task('default', ['less']);

gulp.task('less', function () {
  gulp.src('./app/**/*.less')
  	  .pipe(watch('./app/**/*.less', function(files) {
  	  	files.pipe(less({
  	  	  paths: [ path.join(__dirname, 'less', 'includes') ]
  	  	}))
  	  	.pipe(gulp.dest('./app/assets/css'));
  	  }));
});

gulp.task('start', function() {
	run('npm start').exec();
});