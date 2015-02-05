'use strict';

module.exports = {
	app: {
		title: 'Yuno',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				// 'public/lib/bootstrap/dist/css/bootstrap.css',
				// 'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/theme/css/styles.css',
				'public/lib/angular-growl-v2/build/angular-growl.min.css'
			],
			js: [
				'public/theme/js/vendors/jquery/jquery.min.js',
				'public/theme/js/vendors/jquery/jquery-ui.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/theme/js/vendors/easing/jquery.easing.1.3.min.js',
				'public/theme/js/vendors/nanoscroller/jquery.nanoscroller.min.js',
				'public/theme/js/vendors/datatables/jquery.dataTables.min.js',
				'public/theme/js/vendors/datatables/jquery.dataTables-bootstrap.js',
				'public/theme/js/vendors/powerwidgets/powerwidgets.min.js',
				'public/lib/angular-growl-v2/build/angular-growl.min.js',
				'public/theme/js/vendors/horisontal/cbpHorizontalSlideOutMenu.js',
				'public/lib/angular-datatables/dist/angular-datatables.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};