'use strict';

var src = 'login-reg-EmailVerification-PasswordReset';

var gulp = require('gulp');
// var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var minify = require('gulp-minify-css');
// var cssbeautify = require('gulp-cssbeautify');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
var bs = require('browser-sync').create();
 
// gulp.task('build-css', function () {
//   return gulp.src(src + '/css/**/*.css', {base: src + '/css'})
//     .pipe(sass().on('error', sass.logError))
//     .pipe(concat('compiled-css.css'))
//     .pipe(cssbeautify({            
//         indent: '  ',
//         openbrace: 'separate-line',
//         autosemicolon: true
//      }))
//     // .pipe(gulp.dest('css/'))
//     // .pipe(rename('custom-css.min.css'))
//     //.pipe(minify())
//     .pipe(gulp.dest('src/dev/css/'))
//     .pipe(bs.reload({stream: true}));
// });

// gulp.task('build-js', function() {
//     return gulp.src(src + '/js/**/*.js', {base: src + '/js'})
//       .pipe(concat('compiled-js.js'))
//       // .pipe(gulp.dest('dev/'))
//       // .pipe(rename('custom-js.min.js'))
//       // .pipe(uglify())
//       .pipe(gulp.dest(src + '/js/'))
//       .pipe(bs.reload({stream: true}));
// });

gulp.task('browser-sync', function() {
    bs.init({
      server: {
        //baseDir: "./"
        baseDir: src + '/'
      }
    });
});

gulp.task('watch', ['browser-sync'], function() {
    // gulp.watch([src + '/css/**/*.css'], ['build-css']);
    // gulp.watch([src + '/js/**/*.js'], ['build-js']);
    
    var htmlFiles = src + '/**/*.html';
    var cssFiles = src + '/styles/css/**/*.css';
    gulp.watch([htmlFiles, cssFiles]).on('change', bs.reload);
});
 
gulp.task('serve', ['watch', 'browser-sync']); 