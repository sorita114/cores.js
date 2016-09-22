var gulp = require( 'gulp' ),
    babel = require( 'gulp-babel' );

var paths = {
  js : 'ECMA6/*.js',
  dist : 'dist'
};

gulp.task( 'convert-js', function() {
  return gulp.src( paths.js )
    .pipe(babel())
    .pipe(gulp.dest( paths.dist ));
});

gulp.watch( paths.js , function(){
   gulp.run( 'convert-js' );
});
gulp.task( 'default',[ 'convert-js' ] );
