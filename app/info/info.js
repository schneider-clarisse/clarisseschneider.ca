'use strict';

angular.module('myApp.info', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/info', {
    templateUrl: 'info/info.html',
    controller: 'InfoCtrl'
  });
}])

.controller('InfoCtrl', [function() {

}]);