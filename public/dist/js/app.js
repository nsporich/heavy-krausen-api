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

heavyKrausen.factory('myCache', function($cacheFactory) {
return $cacheFactory('myData');
});

heavyKrausen.controller('CurrentUserController', ['$scope', '$http', 'myCache',
function ($scope, $http, myCache) {

    $http.get('/users/me', {cache: myCache}).
    success(function(data, status, headers, config) {
      $scope.user = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  }
]);

angular.module('HopsCtrl', [])

.controller('HopsController', ['$scope', function($scope) {

    $scope.message = 'A Homebrew API - Hops Database';

}]);

angular.module('MainCtrl', [])

.controller('MainController', ['$scope', function($scope) {

    $scope.message = 'A Homebrew API - Created for the Community - Inspired by the Community';

}]);

angular.module('StyleCtrl', [])

.controller('StyleController', ['$scope', function($scope) {

    $scope.message = 'A Homebrew API - BJCP Style Database';

}]);

angular.module('YeastCtrl', [])

.controller('YeastController', ['$scope', function($scope) {

    $scope.message = 'A Homebrew API - Yeast Database';

}]);

angular.module('TestService', [])

.factory('Test', ['$http', function($http) {

    return {
        get: function() {
            // this returns something
        }
    };

}]);
