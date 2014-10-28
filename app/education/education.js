'use strict';

angular.module('myApp.education', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/education', {
    templateUrl: 'education/education.html',
    controller: 'EducationCtrl'
  });
}])

.controller('EducationCtrl', ['$scope', function($scope) {
	$scope.currentTab = '2B';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

	$scope.terms = [
	{
		term: '1A',
		start_date: 'Sept',
		end_date: 'Dec',
		year: '2012',
		courses: [{
			code: 'CS 137',
			name: 'Programming Principles'
		},
		{
			code: 'ECE 105',
			name: 'Physics of Electrical Engineering 1'
		},
		{
			code: 'ECE 140',
			name: 'Linear Circuits'
		},
		{
			code: 'MATH 115',
			name: 'Linear Algebra for Engineering'
		},
		{
			code: 'MATH 117',
			name: 'Calculus 1 for Engineering'
		},
		{
			code: 'SE 101',
			name: 'Introduction to Methods of Software Engineering'
		}]
	},
	{
		term: '1B',
		start_date: 'Jan',
		end_date: 'Apr',
		year: '2013',
		courses: [{
			code: 'CS 138',
			name: 'Introduction to Data Abstraction and Implementation'
		},
		{
			code: 'ECE 106',
			name: 'Physics of Electrical Engineering 2'
		},
		{
			code: 'ECE 124',
			name: 'Digital Circuits and Systems'
		},
		{
			code: 'MATH 119',
			name: 'Calculus 2 for Engineering'
		},
		{
			code: 'MATH 135',
			name: 'Algebra for Honours Mathematics'
		}]
	},
	{
		term: '2A',
		start_date: 'Sept',
		end_date: 'Dec',
		year: '2013',
		courses: [{
			code: 'CS 241',
			name: 'Foundations of Sequential Programming'
		},
		{
			code: 'ECE 222',
			name: 'Digital Computers'
		},
		{
			code: 'SE 212',
			name: 'Logic and Computation'
		},
		{
			code: 'STAT 206',
			name: 'Statistics for Software Engineers'
		},
		{
			code: 'CHE 102',
			name: 'Chemistry for Engineers'
		},
		{
			code: 'MUSIC 140',
			name: 'Pop Music and Culture'
		}]
	},
	{
		term: '2B',
		start_date: 'May',
		end_date: 'Aug',
		year: '2014',
		courses: [{
			code: 'CS 240',
			name: 'Data Structures and Data Algorithms'
		},
		{
			code: 'CS 247',
			name: 'Software Engineering Principles'
		},
		{
			code: 'MATH 213',
			name: 'Advanced Math for Software Engineers'
		},
		{
			code: 'MATH 239',
			name: 'Intro to Combinatorics'
		},
		{
			code: 'MSCI 261',
			name: 'Engineering Economics'
		},
		{
			code: 'SPCOM 223',
			name: 'Public Speaking'
		}]
	}
	];
}]);