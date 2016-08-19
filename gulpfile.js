var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var htmlreplace = require('gulp-html-replace');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
 

gulp.task('bundleCSS', function() {
    return gulp.src(['css/*/*.css', 'css/*.css'])
        .pipe(concatCss('bundle.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});

// gulp.task('bundleJS', function() {
// 	return gulp.src([
// 		             'js/jquery/jquery-2.1.4.min.js',
// 		             'js/countdown.js',
// 	                 'js/bootstrap/bootstrap.min.js',
// 	                 'js/bootstrap/jquery.bootstrap.wizard.min.js',
// 	                 'js/owl-carousel/owl.carousel.min.js',
// 	                 'js/stellar/jquery.stellar.min.js',
// 	                 'js/animations/wow.min.js',
// 	                 'js/waypoints.min.js',
// 	                 'js/isotope.pkgd.min.js',
// 	                 'js/classie.js',
// 	                 'js/smoothscroll.js',
// 	                 'js/swipebox/jquery.swipebox.min.js',
// 	                 'js/theme.js',
// 	                 'js/app.js'
// 	                ])
// 	.pipe(concat('bundle.min.js'))
//     //.pipe(uglify())
//     .pipe(gulp.dest('js'));
// });

gulp.task('prodReplace', function() {
  return gulp.src('./index.html')
     .pipe(htmlreplace({
        'css': './css/bundle.min.css'
        },{
        	keepUnassigned: true,
        	keepBlockTags: true,
        	resolvePaths: true
        }))
    .pipe(gulp.dest('./'));
});

gulp.task('devReplace', function() {
  return gulp.src('./index.html')
     .pipe(htmlreplace({
        'css': ['./css/bootstrap/bootstrap.min.css', 
                './css/animations/animate.min.css',
                './css/swipebox/swipebox.min.css',
                './css/swipebox/swipebox.min.css',
                './css/font-awesome/font-awesome.min.css',
                './css/owl-carousel/owl.carousel.css',
                './css/owl-carousel/owl.theme.css',
                './css/reset.css',
                './css/style.css',
                './css/mobile.css',
                './css/skin/color.css'
                ],
        'js': ['./js/countdown.js',
               './js/jquery/jquery-2.1.4.min.js',
               './js/bootstrap/bootstrap.min.js',
               './js/bootstrap/jquery.bootstrap.wizard.min.js',
               './js/owl-carousel/owl.carousel.min.js',
               './js/stellar/jquery.stellar.min.js',
               './js/animations/wow.min.js',
               './js/waypoints.min.js',
               './js/isotope.pkgd.min.js',
               './js/classie.js',
               './js/jquery.easing.min.js',
               './js/jquery.counterup.min.js',
               './js/smoothscroll.js',
               './js/swipebox/jquery.swipebox.min.js',
               './js/theme.js',
               './js/app.js'
              ]
        },{
        	keepUnassigned: true,
        	keepBlockTags: true,
        	resolvePaths: true
        }))
    .pipe(gulp.dest('./'));
});

gulp.task('prod', ['bundleCSS', 'prodReplace']);
gulp.task('dev', ['devReplace']);
