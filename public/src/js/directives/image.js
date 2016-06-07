frontendApp.directive('cleverImage', function() {
  return {
    templateUrl: '/src/html/directives/image.html',
    restrict: 'E',
    scope: {
      iurl: '=url'
    },
    controller: function($scope, $sce) {
      $scope.url = $sce.trustAs($sce.URL, $scope.iurl);
    }
  };
});
