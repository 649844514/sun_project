var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('nodemon',function(ab){
	var ft =false;
	return nodemon({
		script:'./app.js'
	} ).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	});
});
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:9999'
		},
		files:['*'],
		port:9888,
		open:false

	})
});


//监听文件变更
gulp.task('watcher',['browserSync','stylus','minify','uglify','nodemon'],function(){
	/*browserSync.init({
		server:'./app.js'
	});*/
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/js/**/*.js',['uglify']);
	gulp.watch(['./public/css/**/*.css','./public/minijs/**/*.js']).on('change',function(){
		reload();
	});
});

//js压缩
gulp.task('uglify',['stylus'],function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minijs'))
});
//css压缩
gulp.task('minify',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/minicss'))
});

//stylus-->css
gulp.task('stylus',function(){
	return gulp.src('./stylus/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/css/'));
});



//创建一个default 任务
gulp.task('default',function(){
	console.log('this is default');
});
