var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
//TASK PARA O SASS
gulp.task('sass', function(){
    return sass('sass/*.sass').pipe(gulp.dest('css'))
});

//TASK DEFAULT GULP
gulp.task('default', function(){
    console.log('Olá Coders')
});