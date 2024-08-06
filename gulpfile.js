/////////////////////FICHIER CONFIGURATION GULP //////////////////////////

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Chemins des fichiers
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  }
};

// compilation des fichiers Sass
function styles() {
    return gulp.src(paths.styles.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.styles.dest));
}

// minifier et concaténer les fichiers JS
function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.scripts.dest));
}

// surveillance pour les changements dans les fichiers
function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

// Tâches définies
const build = gulp.series(gulp.parallel(styles, scripts), watchFiles);

// export des tâches
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.build = build;
exports.default = build;
