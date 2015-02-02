'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.login);
	app.route('/dashboard').get(core.index);
	app.route('/auth/reset/:token').get(core.reset);

	app.route('/auth').post(core.login);
};