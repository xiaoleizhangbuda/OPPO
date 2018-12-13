var gulp = require("gulp");
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var sass = require('gulp-sass');
//拷贝html
gulp.task("copy-html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("E:\\WWW\\OPPO\\html"));
});
// gulp.task("copy-html",function(){
// 	gulp.src("*.html")
// 	.pipe(gulp.dest("E:\\WWW\\OPPO"));
// });
//拷贝php
gulp.task('copy-php',function(){
	gulp.src('php/*.php')
	.pipe(gulp.dest('E:\\WWW\\OPPO\\php'));
});
//拷贝图片
gulp.task('copy-images',function(){
	gulp.src('images/*.{jpg,png,tmp,gif}')
	.pipe(gulp.dest('E:\\WWW\\OPPO\\images'));
});
//拷贝css
gulp.task('copy-css',function(){
	gulp.src('css/*.css')
	.pipe(gulp.dest('E:\\WWW\\OPPO\\css'));
});
//拷贝js
gulp.task('copy-js',function(){
	gulp.src('js/*.js')
	.pipe(gulp.dest('E:\\WWW\\OPPO\\js'));
});

gulp.task("watch",function(){
	//监视index.html文件是否有变化，如果有变化，就执行任务：copy-index
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("html/*.html",["copy-html"]);
	gulp.watch('images/*.{jpg,png,tmp,gif}',["copy-images"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("php/*.php",["copy-php"]);
});