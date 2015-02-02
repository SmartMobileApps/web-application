'use strict';

angular.module('agent').controller('AgentController', ['$scope', '$modal',
	function($scope, $modal) {
		$scope.showNewAgentModal = function() {
            $modal.open({
                templateUrl: 'addAgent.html',
                controller: 'newAgentModalInstanceCtrl',
            });
        };

        $scope.showConfigAgentModal = function() {
            $modal.open({
                templateUrl: 'configAgent.html',
                controller: 'configAgentModalInstanceCtrl',
            });
        };
	}
]).controller('newAgentModalInstanceCtrl', ['growl', '$scope', '$modalInstance', function(growl, $scope, $modalInstance) {

    $scope.agent = {
        name: '', // Agent Name
        fequency: '', // Daily, Weekly, Fortnightly, and Monthly
        time: '', // date time picker
        email: '' // defaults to the given, user can edit
    };


    $scope.addNewAgent = function() {

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

        growl.success('New agent has been added successfully', {
            ttl: -1
        });
        $modalInstance.close();
    };

    $scope.close = function() {
        $modalInstance.close();
    };
}]).controller('configAgentModalInstanceCtrl', ['growl', '$scope', '$modalInstance', function(growl, $scope, $modalInstance) {

    $scope.agent = {
        name: '', // Agent Name
        fequency: 'Daily', // Daily, Weekly, Fortnightly, and Monthly
        time: '', // date time picker
        email: 'default@email.com' // defaults to the given, user can edit
    };


    $scope.addNewAgent = function() {

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

        growl.success('New agent has been added successfully', {
            ttl: -1
        });
        $modalInstance.close();
    };

    $scope.close = function() {
        $modalInstance.close();
    };
}]);