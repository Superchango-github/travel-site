//var gulp = require('gulp');
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/build');

/*no es mas necesaria cap 017
gulp.task('default', function(){
  console.log("Hooray - you created a Goulp task.");
});

gulp.task('html', function(){
  console.log("Imagine something useful being donde to your HTML here.");
});*/


