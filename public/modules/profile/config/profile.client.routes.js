'use strict';

//Setting up route
angular.module('profile').config(['$stateProvider',
	function($stateProvider) {
		// Profile state routing
		$stateProvider.
		state('change-password', {
			url: '/change-password',
			templateUrl: 'modules/profile/views/change-password.client.view.html'
		}).
		state('update-profile', {
			url: '/update-profile',
			templateUrl: 'modules/profile/views/update-profile.client.view.html'
		});
	}
]);