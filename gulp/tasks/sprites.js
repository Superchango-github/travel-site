var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

/*Variable tipo OBJETO de configuración de Sprite */
var config = {
    mode: {
        css: {
            /**Esto solo es para darle el nombre mas claro */
            sprite: 'sprite.svg',
            /**Esto genera un css con las coordenadas de cada icono de la imagen conjunta*/
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function(){
    return del(['./app/temp/sprite','./app/assets/images/sprites']);
});

/*Crea una carpeta nueva en tmp y copia los iconos de una 
carpeta a la otra */
gulp.task('createSprite', ['beginClean'], function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
    /*Esta linea genera el svg con todos los iconos */
    .pipe(svgSprite(config))    
    .pipe(gulp.dest('./app/temp/sprite'))
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

/**El [] indica dependencia, no se ejecuta hasta q no finalice lo que esta entre [] */
gulp.task('copySpriteCSS', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
    return del(['./app/temp/sprite']);
});

/*Tarea que corra las 2 anteriores automaticamente*/
gulp.task('icons',['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);