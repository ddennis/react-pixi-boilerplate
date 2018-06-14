/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 01-04-2016.
 */

const gulp    = require('gulp');

const gutil   = require('gulp-util');
const plumber = require('gulp-plumber');

const less = require('gulp-less');

//const tasks  = fs.readdirSync('./gulp/tasks/')


// get all task from the gulp task folder


//---------------------------------------------------------------------------------------------
// These tasks needs to be in this file if we want to run them from the package.json scripts
//---------------------------------------------------------------------------------------------



gulp.task('styles', function () {
	return gulp.src('./styles/styles.less')
		.pipe(plumber(function(error) {
			this.emit('end');
		}))
		.pipe(less())
		.pipe(gulp.dest('./src/styles/' ));
});


/*gulp.task('styles-overrides', function () {

	return gulp.src('./src/components/!**!/!*.scss')
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))
		.pipe(concat("somefile.less"))
		//.pipe(changed(config.styles.output ))
		.pipe(sass().on('error', sass.logError))
		//.pipe(autoprefixer("last 2 versions", "> 1%", "ie 9"))
		.pipe(rename('component-overrides.css'))
		.pipe(gulp.dest('./src/styles/' ));

});*/



gulp.task('styles-single', function () {

	const source = './src/components/';

	return gulp.src([ './src/*.less', source + '**/*.less'  ], {base: './src'})
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))

		//.pipe(changed(source ))
		.pipe(less())
		//.pipe(autoprefixer("last 2 versions", "> 1%", "ie 9"))

		.pipe(gulp.dest('./src' ));

});



gulp.task('styles-watch', function () {
	gulp.watch(['./src/*.less' , './src/components/**/*.less'] , ['styles-single']);
	gulp.watch(['./semantic/**/*' ] , ['semantic']);
});



/*gulp.task('styles-watch', function () {
	gulp.watch(['./src/components/!**!/!*.scss'] , ['styles-single']);
	gulp.watch(['./src/styles/style.scss' ] , ['semantic']);

});*/




