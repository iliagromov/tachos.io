const gulp = require('gulp');
const smartgrid = require('smart-grid');

gulp.task('grid', function (done) {

	delete require.cache[require.resolve('../configs/smartgrid.config.js')];

	let settings = require('../configs/smartgrid.config.js');

	settings.filename = 'smart-grid-calc';
	smartgrid('./src/sass/smartgrid', settings);

	done();
});