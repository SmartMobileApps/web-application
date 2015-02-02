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
]).controller('newUserModalInstanceCtrl', ['growl', '$scope', '$modalInstance', function(growl, $scope, $modalInstance) {

    $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        clientName: ''
    };


    $scope.addNewUser = function() {

        // SchoolFactory.create($scope.regisSchool).success(function(data) {
        //     growl.success('New school has been added successfully', {
        //         ttl: -1
        //     });
        //     window.__table.api().ajax.reload();
        //     $modalInstance.close();
        // }).error(function(err) {
        //     if (err && err.errorStatus > 0) {
        //         growl.error(err.error, {
        //             ttl: -1
        //         });
        //     }
        //     $modalInstance.close();
        // });

        growl.success('New user has been added successfully', {
            ttl: -1
        });
        $modalInstance.close();
    };

    $scope.close = function() {
        $modalInstance.close();
    };
}]);
