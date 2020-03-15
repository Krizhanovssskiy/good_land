'use strict';

const gulp        = require('gulp'),
      sass        = require('gulp-sass'),
      browserSync = require('browser-sync'),
      sourcemaps  = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(
      ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
      { cascade: true })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { ///// Создаем таск browser-sync
  browserSync({ ///// Выполняем browser Sync
    server: { ///// Определяем параметры сервера
      baseDir: 'src' /////// Директория для сервера - app
    },
    notify: false ////// Отключаем уведомления
  });
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(browserSync.reload({stream: true}))

});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('src/*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('watch', 'sass', 'browser-sync'));


