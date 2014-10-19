'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.coding',
  'myApp.activities',
  'myApp.info',
  'myApp.sounds',
  'myApp.education',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/info'});
}]);
