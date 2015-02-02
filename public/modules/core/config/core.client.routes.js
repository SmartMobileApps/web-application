'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/search');

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/core/views/home.client.view.html'
            });




    }
]).run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // jquery hack to reset the left menu :(
        if (fromState.url === '/change-password' || fromState.url === '/update-profile') {
            if (toState.url !== '/change-password' && toState.url !== '/update-profile') {
                $('[data-id=profile-sub]').trigger('click');
            }
        }
    });
}]);
