var heavyKrausen = angular.module('heavyKrausen', ['ui.router', 'MainCtrl', 'StyleCtrl', 'HopsCtrl', 'YeastCtrl', 'TestService']);

heavyKrausen.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "partials/index.html",
      controller: 'MainController'
    })
    .state('styles', {
      url: "/styles",
      templateUrl: "partials/styles.html",
      controller: 'StyleController'
    })
    .state('hops', {
      url: "/hops",
      templateUrl: "partials/hops.html",
      controller: 'HopsController'
    })
    .state('yeast', {
      url: "/yeast",
      templateUrl: "partials/yeast.html",
      controller: 'YeastController'
    });
});
