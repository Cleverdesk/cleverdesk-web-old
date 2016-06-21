frontendApp.controller('PageController', function($scope, $log, $routeParams, communicator, parser) {
    communicator.getPage($routeParams.plugin, $routeParams.page).then(function(page) {
        parser.parsePage(page).then(function(components) {
            $scope.components = components;
            $scope.$apply();
        });
    })
});
