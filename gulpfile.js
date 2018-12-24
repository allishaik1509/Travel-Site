var gulp 	= require('gulp'),
	watch 	= require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer');

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
	.pipe(postcss([autoprefixer]));
	.pipe(gulp.dest('./app/temp/styles'));
})
gulp.task('watch',function(){

	gulp.watch('./app/index.html',function(){
		gulp.start('html');
		});

	gulp.watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
		});
});