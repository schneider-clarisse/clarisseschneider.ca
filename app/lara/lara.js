'use strict';

angular.module('myApp.lara', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lara', {
    templateUrl: 'lara/lara.html',
    controller: 'LaraCtrl'
  });
}])

.controller('LaraCtrl', [function() {
}]);