angular.module('myApp').factory('workerFactory', function ($http) {
	'use strict';
	return {
		getData: function(){
			return $http.get('/test');
		}
	}
});