'use strict';

angular.module('myApp.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume/resume.html',
    controller: 'ResumeCtrl'
  });
}])

.controller('ResumeCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.isActiveProject = function (project) {
        var activeProject = false;
        angular.forEach(angular.element(document.querySelector('.hoverSkill')), function(skill) {
        	var checkProject = $filter('filter')($scope.projects, {name: project}, true);
        	if( checkProject[0].skills.indexOf(skill.id) >= 0 ) {
        		activeProject = true;
        		return;
        	}
        } );
        return activeProject ? true : false;
    }
	$scope.isActiveSkill = function (skill) {
		var activeSkill = false;
		angular.forEach(angular.element(document.querySelector('.hoverProject')), function(project) {
	    	var projects = $filter('filter')($scope.projects, {name: project.id}, true);
	    	if( projects[0].skills.indexOf(skill) >= 0 ) {
	    		activeSkill = true;
	    		return;
	    	}
	    });
        return activeSkill ? true : false;
    }

	$scope.projects = [
	{
		name: "Website",
		skills: [ 'HTML/CSS', 'Angular', 'Git', 'OS X' ]
	},
	{
		name: "EngPort",
		skills: [ 'HTML/CSS', 'Ruby', 'Git', 'Photoshop', 'OS X' ]
	},
	{
		name: "OneBible",
		skills: [ 'HTML/CSS', 'C++', 'OS X' ]
	},
	{
		name: "Facebook",
		skills: [ 'Java', 'Objective-C', 'C', 'C++', 'Mercurial', 'OS X' ]
	},
	{
		name: "Lookout",
		skills: [ 'Java', 'Git', 'OS X' ]
	},
	{
		name: "Kaleidescape",
		skills: [ 'HTML/CSS', 'PHP', 'jQuery', 'Javascript', 'Bootstrap', 'Knockout', 'Windows', 'Perforce' ]
	},
	{
		name: "Singspiel",
		skills: [ 'HTML/CSS', 'Java', 'Javascript', 'jQuery', 'Bootstrap', 'OS X', 'Git' ]
	}];
}]);