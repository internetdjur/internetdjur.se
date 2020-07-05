const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

gulp.task("copy", () =>
  gulp.src(["./src/*", "!./src/index.html"]).pipe(gulp.dest("./dist/"))
);

gulp.task("minify", () =>
  gulp
    .src("./src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: false,
      })
    )
    .pipe(gulp.dest("./dist/"))
);

gulp.task("dist", gulp.series("copy", "minify"));

gulp.task("watch", () => gulp.watch("./src/*", gulp.series("dist")));
