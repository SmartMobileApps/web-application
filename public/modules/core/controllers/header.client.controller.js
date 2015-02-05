'use strict';

angular.module('core').controller('HeaderController', ['$rootScope', '$scope', '$location',
    function($rootScope, $scope, $location) {

        $scope.isActive = function(route) {
            return route === $location.path();
        };

        $scope.navigate = function(path) {
            location.href = path;
        };

        $scope.signout = function() {
            localStorage.clear();
            location.href = '/';
        };

        // check login status
        var user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            $scope.signout();
        } else {
            user.role = user.roles[0];
            $rootScope._user = user;
        }
    }
]);
