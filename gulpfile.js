'use strict';

/**
 *
 * GULP FILE
 *
 * This file used for the creating the builds of the library.
 *
 * @type {string}
 */

const DIST_FOLDER = './dist/@modernfidelity/fabric';
const gulp = require('gulp');
const sass = require('node-sass');
const exec = require('child_process').exec;

const clean = require('gulp-rimraf');

gulp.task('clean', [], function() {
  console.log("Clean all files in build folder");

  return gulp.src("dist/*", { read: false }).pipe(clean());
});



/**
 * Implements ESM build watch mode.
 * This is a temporary solution until ngc is supported --watch mode.
 * @see: https://github.com/angular/angular/issues/12867
 */
gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*', ['test', 'copy']);
});

gulp.task('copy', ['clean'], () => {
  return gulp.src('./src/lib/**').pipe(gulp.dest(DIST_FOLDER));
});


gulp.task('default', ['copy'], function() {
  console.log("Rebuilding lib");

});


/**
 * Compile SASS to CSS.
 * @see https://github.com/ludohenin/gulp-inline-ng2-template
 * @see https://github.com/sass/node-sass
 */
function compileSass(path, ext, file, callback) {
  let compiledCss = sass.renderSync({
    data: file,
    outputStyle: 'compressed',
  });
  callback(null, compiledCss.css);
}
