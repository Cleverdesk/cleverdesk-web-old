frontendApp.directive('cleverLabel', function() {
  return {
    templateUrl: '/src/html/directives/label.html',
    restrict: 'E',
    scope: {
      text: '=text'
    },
  };
});
