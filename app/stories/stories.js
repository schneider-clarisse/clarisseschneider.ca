'use strict';

angular.module('myApp.stories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stories', {
    templateUrl: 'stories/stories.html',
    controller: 'StoriesCtrl'
  });
}])

.controller('StoriesCtrl', ['$http', '$scope', '$sce', 
	function($http, $scope, $sce) {
		var getLatestPost = function() {
			$scope.post = {};
			
			$http.jsonp('http://justclary.tumblr.com/api/read/json?callback=JSON_CALLBACK&type=text')
			.success(function(response) {
				console.log('retrieved post');
				$scope.post.title = response.posts[0]['regular-title'];
				$scope.post.body  = $sce.trustAsHtml(response.posts[0]['regular-body']);
			})
			.error(function(response) {
			});
	}

	getLatestPost();
}]);