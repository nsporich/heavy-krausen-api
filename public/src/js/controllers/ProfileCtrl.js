angular.module('ProfileCtrl', [])

.controller('ProfileController', ['$scope', '$http', 'myCache',
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
