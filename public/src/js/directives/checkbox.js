frontendApp.directive('cleverCheckbox', function() {
  return {
    templateUrl: '/src/html/directives/checkbox.html',
    restrict: 'E',
    scope: {
      name: '=name',
      value: '=value',
      label: '=label'
    },
  };
});
