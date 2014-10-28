'use strict';

angular.module('myApp.links', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/links', {
    templateUrl: 'links/links.html',
    controller: 'LinksCtrl'
  });
}])

.controller('LinksCtrl', ['$timeout', function($timeout) {
	function init(){
        $timeout(initWookmark, 0);
     }
    
    function initWookmark(){
        angular.element('.link').wookmark( {
			align: 'center',
			autoResize: true,
		  	resizeDelay: 50,
		  	offset: 15,
		  	container: angular.element('#links-wookmark')
        });
    }
    
    init();
}]);