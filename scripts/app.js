var myApp = angular.module('myApp', ['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "views/main.html"
    })
    .state('state2',{
      url:"/state2",
      templateUrl: "views/view1.html"
    })
}]);