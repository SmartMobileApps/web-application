'use strict';

angular.module('user-management').controller('AddUserController', ['$scope', '$modal',
    function($scope, $modal) {
        $scope.showNewUserModal = function() {
            $modal.open({
                templateUrl: 'addUser.html',
                controller: 'newUserModalInstanceCtrl',
            });
        };
    }
]).controller('newUserModalInstanceCtrl', ['growl', '$scope', '$modalInstance', 'UsermanagementFactory', function(growl, $scope, $modalInstance, UsermanagementFactory) {

    $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        clientName: '',
        password: '********'
    };


    $scope.addNewUser = function() {

        $scope.user.role = [$scope.user.role];
        UsermanagementFactory.save($scope.user).success(function(data) {
            growl.success('New user has been added successfully', {
                ttl: -1
            });
            UsermanagementFactory.trigMail({
                'email': $scope.user.email,
                'newuser': true
            });
            //window.__table.api().ajax.reload();
            $modalInstance.close();
        }).error(function(err) {

            growl.error(err.message, {
                ttl: -1
            });

            $modalInstance.close();
        });
    };

    $scope.close = function() {
        $modalInstance.close();
    };
}]);
