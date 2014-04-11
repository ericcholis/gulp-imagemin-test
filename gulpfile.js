var gulp     = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('default', function () {
    return gulp.src('images/src/*.png')
            .pipe(imagemin({ ext: "png", pngquant: true}))
            .pipe(gulp.dest('images/dest'));
});