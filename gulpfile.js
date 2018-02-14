var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');


gulp.task('css', function () {
    return gulp.src('./tailwind/style.css')
        .pipe(postcss([
            tailwindcss('./tailwind.js'),
        ]))
        .pipe(gulp.dest('./static/styles'));
});