'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'default', function() {

});

gulp.task('sass', function () {
	gulp.src( './sass/**/*.scss' )
		.pipe( sass( { outputStyle: 'compressed' } ) )
		.pipe( gulp.dest( './css' ) );
});