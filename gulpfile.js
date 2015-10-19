var gulp = require('gulp');
var bower = require('gulp-bower');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();


gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('bower', function() {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app/lib'
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["./app/**"],{
        server: {
            baseDir: "app",
            index: "index.html"
        },
        ui: {
            port: 8080,
            weinre: {
                port: 9090
            }
        },
        browser: ["firefox"]
    });
});