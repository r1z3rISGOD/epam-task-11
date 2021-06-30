const
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

gulp.task('autoprefixer', () => {
    return gulp.src('./src/main.scss')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./src/styles'))
})
