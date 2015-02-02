'use strict';

//Setting up route
angular.module('agent').config(['$stateProvider',
	function($stateProvider) {
		// Agent state routing
		$stateProvider.
		state('agent', {
			url: '/agent',
			templateUrl: 'modules/agent/views/agent.client.view.html'
		});
	}
]);