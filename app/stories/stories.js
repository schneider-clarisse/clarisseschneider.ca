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
		$(function () {
			var $content = $('#post-container');
			var data = {
				rss_url: 'https://medium.com/feed/@claryschneider'
			};
			$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
				if (response.status == 'ok') {
					var output = '';
					$.each(response.items, function (k, item) {
						output += '<div class="blog-post">';
						output += '<a href="'+ item.link + '"><div class="blog-content"><h4>' + item.title + '</h4>';
						output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
						var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
						var maxLength = 200 // maximum number of characters to extract
						//trim the string to the maximum length
						var trimmedString = yourString.substr(0, maxLength);
						//re-trim if we are in the middle of a word
						trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
						output += '<p>' + trimmedString + '...</p>';
						output += '</div></a></div>';
						return k < 8;
					});
					$content.html(output);
        }
    });
});
}]);
