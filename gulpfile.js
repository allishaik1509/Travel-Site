var gulp 			= require('gulp'),
	watch 			= require('gulp-watch'),
	postcss 		= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer'),
	cssvars			= require('postcss-simple-vars'),
	nested			= require('postcss-nested'),
	cssImport		= require('postcss-import'),
	browserSync		= require('browser-sync').create(),
	mixins			= require('postcss-mixins');

gulp.task('default',function()
{
	console.log("Successfully Created Task");
});

gulp.task('html',function()
{
	console.log('You have written something in HTML');
});

gulp.task('cssInject',function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('styles',gulp.series('cssInject',function()
{
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(watch('./app/assets/styles/styles.css'))
	.on('error',function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
}));


gulp.task('watch',function(){
	
	browserSync.init({
		server:{
			baseDir:"app"
		}
	});

	watch('./app/index.html',function(){
		browserSync.reload();
		});

	watch('./app/assets/styles/**/*.css',gulp.series('styles',function(){
		browserSync.reload();
		}));
});


