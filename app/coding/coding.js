'use strict';

angular.module('myApp.coding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coding', {
    templateUrl: 'coding/coding.html',
    controller: 'CodingCtrl'
  });
}])

.controller('CodingCtrl', [function() {

}]);