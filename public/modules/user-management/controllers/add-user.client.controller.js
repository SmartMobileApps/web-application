'use strict';

angular.module('user-management').controller('AddUserController', ['$scope', '$rootScope', '$modal', 'UsermanagementFactory', 'directiveService', 'growl',
    function($scope, $rootScope, $modal, UsermanagementFactory, directiveService, growl) {
        $scope.users = [];

        if (!$rootScope._user || $rootScope._user.role === 'user') {
            localStorage.clear();
            location.href = '/';
        }

        $scope.deleteUser = function(u) {
            $rootScope.toDelID = u._id;
            $modal.open({
                templateUrl: 'deleteUser.html',
                controller: 'deleteUserModalInstanceCtrl',
            });
        };

        $scope.editUser = function(u) {
            $rootScope.toEditUser = u;
            $modal.open({
                templateUrl: 'editUser.html',
                controller: 'editUserModalInstanceCtrl',
            });
        };

        $scope.$on('reloadTable', function(event, args) {
            loadTable();
        });

        function loadTable() {
            UsermanagementFactory.getAll().then(function(data) {
                // if ($('#DataTables_Table_0_wrapper').length > 0) {
                //     $('.data-table').DataTable().fnDestroy();
                // }
                // setTimeout(function() {
                $scope.users = data.data;
                //     directiveService.publish();
                // }, 125);
            });
        }

        $scope.showNewUserModal = function() {
            $modal.open({
                templateUrl: 'addUser.html',
                controller: 'newUserModalInstanceCtrl',
            });
        };

        loadTable();
    }
]).controller('newUserModalInstanceCtrl', ['growl', '$scope', '$rootScope', '$modalInstance', 'UsermanagementFactory', 'directiveService',
    function(growl, $scope, $rootScope, $modalInstance, UsermanagementFactory, directiveService) {

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

                $rootScope.$broadcast('reloadTable');

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
    }
]).controller('deleteUserModalInstanceCtrl', ['growl', '$scope', '$rootScope', '$modalInstance', 'UsermanagementFactory',
    function(growl, $scope, $rootScope, $modalInstance, UsermanagementFactory) {

        $scope.deleteUser = function(u) {

            UsermanagementFactory.delete($rootScope.toDelID).success(function(data) {
                growl.success('User has been successfully deleted', {
                    ttl: -1
                });
                $rootScope.$broadcast('reloadTable');
                $modalInstance.close();

            }).error(function(err) {
                growl.error('Oops Something went wrong!', {
                    ttl: -1
                });
                $modalInstance.close();
            });
        };

        $scope.close = function() {
            $modalInstance.close();
        };
    }
]).controller('editUserModalInstanceCtrl', ['growl', '$scope', '$rootScope', '$modalInstance', 'UsermanagementFactory',
    function(growl, $scope, $rootScope, $modalInstance, UsermanagementFactory) {

        $scope.beforEmail = $rootScope.toEditUser.email;
        $scope.user = {
            _id: $rootScope.toEditUser._id,
            firstName: $rootScope.toEditUser.firstName,
            lastName: $rootScope.toEditUser.lastName,
            role: $rootScope.toEditUser.roles[0],
            email: $rootScope.toEditUser.email,
            clientName: $rootScope.toEditUser.clientName
        };

        $scope.updateUser = function(u) {

            UsermanagementFactory.update($scope.user).success(function(data) {
                growl.success('User has been successfully updated', {
                    ttl: -1
                });

                if ($scope.beforEmail !== $scope.user.email) {
                    UsermanagementFactory.trigMail({
                        'email': $scope.user.email,
                        'newuser': true
                    });
                }

                $rootScope.$broadcast('reloadTable');
                $modalInstance.close();

            }).error(function(err) {
                growl.error('Oops Something went wrong!', {
                    ttl: -1
                });
                $modalInstance.close();
            });
        };

        $scope.close = function() {
            $modalInstance.close();
        };
    }
]);
