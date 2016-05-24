frontendApp.directive('cleverHtml', function() {
  return {
    templateUrl: '/src/html/directives/htmlView.html',
    restrict: 'E',
    scope: {
      code: '=code'
    },
  };
});
