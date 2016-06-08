frontendApp.directive('cleverYoutube', function() {
  return {
    templateUrl: '/src/html/directives/youtube.html',
    restrict: 'E',
    scope: {
      iurl: '=url',
      width: '=width',
      height: '=height'
    },
    controller: function($scope, $sce) {
      var patt = /https:\/\/www\.youtube\.com\/watch\?v=(.*)/;

      var test = patt.test($scope.iurl);

      if (test == true) {
        var id = patt.exec($scope.iurl)[1];
        $scope.eurl = "https://www.youtube.com/embed/" + id;
      }
      if (test== false) {
        $scope.urlError = true;
      }
      $scope.url = $sce.trustAs($sce.RESOURCE_URL, $scope.eurl);
      $scope.width = 420;
      $scope.height = 315;
    }
  };
});
