'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var concat = require('gulp-concat');

gulp.task( 'default', function() {

});

gulp.task('sass', function () {
	gulp.src( './sass/**/*.scss' )
		.pipe( sass( { outputStyle: 'compressed' } ) )
		.pipe( gulp.dest( './deploy/css' ) );
});

 
gulp.task('js', function() {
	return gulp.src('./js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./deploy/js'));
});