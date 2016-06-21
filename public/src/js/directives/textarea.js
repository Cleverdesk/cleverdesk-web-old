frontendApp.directive('cleverTextarea', function() {
  return {
    templateUrl: '/src/html/directives/Textarea.html',
    restrict: 'E',
    scope: {
      name: '=name',
      value: '=value',
      label: '=label',
      placeholder: '=placeholder'
    },
  };
});
