frontendApp.directive('cleverImage', function() {
  return {
    templateUrl: '/src/html/directives/image.html',
    restrict: 'E',
    scope: {
      url: '=url'
    },
  };
});
