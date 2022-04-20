const gulp = require('gulp');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();

const isDev = (process.argv.indexOf('--dev') !== -1);
const isProd = !isDev;
const isSync = (process.argv.indexOf('--sync') !== -1);

const path = require('../path.json');



// ===============================================
// Tasks dist all files to backend
// ===============================================
gulp.task('dist', function () {
    return gulp.src(path.dist + '**/*')
        .pipe(gulp.dest(path.backend))
        .pipe(browserSync.stream());
})


