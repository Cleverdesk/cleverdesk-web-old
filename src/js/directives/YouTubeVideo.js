frontendApp.directive('cleverYoutube', function() {
  return {
    templateUrl: '/src/html/directives/youtube.html',
    restrict: 'E',
    scope: {
      iurl: '=url',
      width: '=width',
      height: '=height'
    },
    controller: function ($scope, $sce) {
      $scope.url = $sce.trustAs('RESOURCE_URL', $scope.iurl);
    }
  };
});
