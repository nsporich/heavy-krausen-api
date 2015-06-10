angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/styles', {
            templateUrl: 'views/styles.html',
            controller: 'StyleController'
        })

        .when('/hops', {
            templateUrl: 'views/hops.html',
            controller: 'HopsController'
        })

        .when('/yeast', {
            templateUrl: 'views/yeast.html',
            controller: 'YeastController'
        });

    $locationProvider.html5Mode(true);

}]);
