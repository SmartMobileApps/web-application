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
            trigMail: function(email) {
                return $http.post('/auth/forgot', email);
            },
            getAll: function() {
                return $http.get('/api/v1/users');
            },
            delete: function(id) {
                return $http.delete('/api/v1/users/' + id);
            },
            update: function(user) {
                return $http.put('/api/v1/users/' + user._id, user);
            },
        };
    }
]);
