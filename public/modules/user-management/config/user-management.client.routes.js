'use strict';

//Setting up route
angular.module('user-management').config(['$stateProvider',
	function($stateProvider) {
		// User management state routing
		$stateProvider.
		state('add-user', {
			url: '/add-user',
			templateUrl: 'modules/user-management/views/add-user.client.view.html'
		});
	}
]);