'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function defaultTask() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

exports.default = defaultTask
