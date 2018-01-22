const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './dist'
    });

    gulp.watch('./dev/scss/**/*.scss', ['sass']);
    gulp.watch('./dev/views/**/*.pug', ['pug']);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
});

gulp.task('sass', () => {
    gulp.src('./dev/scss/styles.scss')
    .pipe(wait(500))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('pug', () => {
    gulp.src('./dev/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});