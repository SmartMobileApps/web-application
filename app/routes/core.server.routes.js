'use strict';

module.exports = function(app) {
    // Root routing
    var core = require('../../app/controllers/core.server.controller');
    var users = require('../../app/controllers/users/user.crud.server.controller.js');

    app.route('/').get(core.login);
    app.route('/dashboard').get(core.index);
    app.route('/auth/reset/:token').get(core.reset);

    app.route('/auth').post(core.login);

    app.route('/api/v1/users')
    	.get(users.allUsers);

    app.route('/api/v1/users/:_id')
        .put(users.updateUser)
    	.delete(users.deleteUser);

};
