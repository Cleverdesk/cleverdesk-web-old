frontendApp.directive('cleverHtml', function() {
  return {
    templateUrl: '/src/html/directives/htmlView.html',
    restrict: 'E',
    scope: {
      icode: '=code'
    },
    controller: function($scope, $sce) {
          $scope.code = $sce.trustAs($sce.HTML, $scope.icode);
    }
  };
});
