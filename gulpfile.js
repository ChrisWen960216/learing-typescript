const gulp = require('gulp');

const ts = require('gulp-typescript');

const tsProject = ts.createProject({
  removeComments: true,
  noImplicitAny: true,
  target: 'ES3',
  module: 'commonjs',
  declarationFiles: false
})

gulp.task('default',['tsc'])

gulp.task('tsc', () => {
  return gulp.src('./source/ts**/**.ts').pipe(ts(tsProject())).js.pipe(gulp.dest('./temp/source/js'))
})
