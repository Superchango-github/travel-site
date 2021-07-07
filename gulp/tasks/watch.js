var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
      //notify: false,
      server:{
        baseDir: "app"
      }
    });
    watch('./app/index.html', function(){
      //gulp.start('html');
      browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function(){
      //gulp.start('styles');
      gulp.start('cssInject');
    });
    watch('./app/assets/scripts/**/*.js', function() {
      gulp.start('scriptsRefresh');
    });
  });

//lo que esta entre corchete es una dependencia
gulp.task('cssInject',['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
  });

//esto es para que webpack haga un bundle del .js y despues haga el refresh
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});