'use strict';

//Menu service used for managing  menus
angular.module('core').service('directiveService', function() {
    var listeners = [];
    return {
        subscribe: function(callback) {
            listeners.push(callback);
        },
        publish: function() {
            angular.forEach(listeners, function(value, key) {
                value();
            });
        }
    };
});
