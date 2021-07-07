const GulpUglify = require('gulp-uglify');

var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
    browserSync.init({
        //notify: false,
        server:{
          baseDir: "docs"
        }
      });
});

gulp.task('deleteDistFolder', ['icons'], function() {
    return del("./docs");
})

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**',
    ]

    return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
    //Con el signo ! excluimos algo a copiar, x ej la carpeta iconos
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,//optimiza las jpg
        interlaced: true,//para las imagenes gif
        multipass: true//para los svg
    }))
    .pipe(gulp.dest("./docs/assets/images"));
})

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
    gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function(){
    return gulp.src("./app/index.html")
    .pipe(usemin({
        css:[function(){return rev()}, function() {return cssnano()}],
        js: [function(){return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages','useminTrigger']);