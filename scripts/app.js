var myApp = angular.module('myApp', ['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/",
      templateUrl: "views/main.html"
    })
    .state('state2',{
      url:"/state2",
      templateUrl: "views/view1.html",
      controller: "workerController"
    })
     .state('state3',{
      url:"/state3",
      templateUrl: "views/main.html",
      controller: "workerController"
    })
     .state('state4',{
      url:"/state4",
      templateUrl: "views/contact.html",
      controller: "workerController"
    })
}]);