'use strict';

angular.module('myApp.snaps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/snaps', {
    templateUrl: 'snaps/snaps.html',
    controller: 'snapsCtrl'
  });
}])

.controller('snapsCtrl', ['$http', '$scope', '$sce',
	function($http, $scope, $sce) {
		$(function () {
			var feed = new Instafeed({
				get: 'user',
                userId: '177726899',
                accessToken: '[ACCESS_TOKEN]',
			});
			feed.run();
        });
}]);
