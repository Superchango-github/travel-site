var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
      //notify: false,
      server:{
        baseDir: "app"
      }
    })
    watch('./app/index.html', function(){
      //gulp.start('html');
      browserSync.reload();
    })
    watch('./app/assets/styles/**/*.css', function(){
      //gulp.start('styles');
      gulp.start('cssInject');
    })
  });

  //lo que esta entre corchete es una dependencia
gulp.task('cssInject',['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
  });