'use strict';

angular.module('myApp.activities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/activities', {
    templateUrl: 'activities/activities.html',
    controller: 'ActivitiesCtrl'
  });
}])

.controller('ActivitiesCtrl', ['$timeout', function($timeout) {
  function init(){
    $timeout(initWookmark, 0);
  }
    
  function initWookmark(){
      angular.element('.thumbnail').wookmark( {
        align: 'center',
        autoResize: true,
        resizeDelay: 50,
        offset: 30,
        container: angular.element('#activities-container')
      });
  }
  
  init();
}]);