frontendApp.directive('cleverInputfield', function() {
  return {
    templateUrl: '/src/html/directives/inputField.html',
    restrict: 'E',
    scope: {
      name: '=name',
      value: '=value',
      label: '=label',
      placeholder: '=placeholder'
    }
  };
});
