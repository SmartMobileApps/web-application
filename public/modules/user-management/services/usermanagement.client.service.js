'use strict';

angular.module('user-management').factory('UsermanagementFactory', ['$http',
	function($http) {
		// UsermanagementFactory service logic
		// ...

		// Public API
		return {
			save: function(user) {
				return $http.post('/auth/signup', user);
			},
			trigMail : function (email) {
				return $http.post('/auth/forgot', email);
			}
		};
	}
]);