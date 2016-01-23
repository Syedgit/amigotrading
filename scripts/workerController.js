angular.module('myApp').controller('WorkerController', function ($scope,workerFactory) {
	'use strict';
	$scope.test = function(){
		alert("first functiona is working");
	};
	$scope.data = {};
	$scope.getTestData = function(){
		workerFactory.getData().then(function(response){
			$scope.data = response.data;
			console.log("Data from server",$scope.data);
		})
	}
});

