'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Menus', '$location',
    function($scope, Menus, $location) {

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
    }
]);
