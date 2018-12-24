var gulp 			= require('gulp'),
	watch 			= require('gulp-watch'),
	postcss 		= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer'),
	cssvars			= require('postcss-simple-vars'),
	nested			= require('postcss-nested'),
	batch			= require('gulp-batch');

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
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
})
gulp.task('watch',function(){

	watch('./app/index.html',batch(function(){
		gulp.start('html');
		}));

	gulp.watch('./app/assets/styles/**/*.css',batch(function(){
		gulp.start('styles');
		}));
});