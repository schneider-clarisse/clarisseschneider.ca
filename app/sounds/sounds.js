'use strict';

angular.module('myApp.sounds', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sounds', {
    templateUrl: 'sounds/sounds.html',
    controller: 'SoundsCtrl'
  });
}])

.controller('SoundsCtrl', ['$timeout', function($timeout) {
	function init(){
        $timeout(initWookmark, 0);
     }
    
    function initWookmark(){
        angular.element('.item').wookmark( {
  			align: 'center',
  			autoResize: true,
		  	resizeDelay: 50,
		  	offset: 5,
		  	container: angular.element('#sounds-wookmark')
        });
    }
    
    init();
}]);