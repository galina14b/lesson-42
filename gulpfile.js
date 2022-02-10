const gulp = require('gulp');
const autopref = require('gulp-autoprefixer');

gulp.task('autopref', async function (){
    gulp.src('project/css/style.css')
        .pipe(autopref({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});



// gulp.task('sass', function(){
//     return gulp.src('app/scss/styles.scss')
//         .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
//         .pipe(gulp.dest('app/css'))
// });