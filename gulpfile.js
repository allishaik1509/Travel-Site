var gulp = require('gulp'),
	watch = require('gulp-watch'),
	batch = require('gulp-batch');

gulp.task('default',function()
{
	console.log("Successfully Created Task");
});

gulp.task('html',function()
{
	console.log('You have written something in HTML');
});

gulp.task('styles',function()
{
	console.log('You have written something in Sass and PostCSS');
})
gulp.task('watch',function(){

	watch('./app/index.html',batch(function(events, done){
		gulp.start('html', done);
		}));

	watch('./app/assets/styles/**/*.css', batch(function(events, done){
		gulp.start('styles', done);
		}));
});