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

			$http({url: 'http://cors.io/?u=http://medium.com/@claryschneider'})
			.success(function(data) {
				var profile_page = $("<div></div>");
				profile_page.html(data);

				var featured_post_url = $('.js-featuredPostBlock', profile_page).find('.blockDivider-name').attr('href');
				featured_post_url = featured_post_url.substring(featured_post_url.indexOf('medium'));

				$http({url: "http://cors.io/?u=http://" + featured_post_url})
				.success(function(data) {
					var article = $("<div></div>");
					article.html(data);

					$scope.post.title = $("[name='title']", article).attr('content');
					$scope.post.body = $sce.trustAsHtml($(".section-content", article).html());
				});
			});
	}

	getLatestPost();
}]);