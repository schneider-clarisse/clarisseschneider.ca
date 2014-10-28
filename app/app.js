'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.coding',
  'myApp.links',
  'myApp.activities',
  'myApp.resume',
  'myApp.info',
  'myApp.stories',
  'myApp.sounds',
  'myApp.education',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/info'});
}])

.controller('NavBarController', ['$location', '$scope', function($location, $scope) {
	$scope.$on('$routeChangeStart', function(next, current) { 
     $scope.path = $location.path().substring(1);
   });
}]);