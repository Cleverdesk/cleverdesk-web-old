frontendApp.controller('PageController', function($scope, $log, $routeParams, communicator, parser) {
    communicator.getPage($routeParams.plugin, $routeParams.page).then(function(page) {
        parser.parsePage(page).then(function(page) {
            $scope.page = page;
            $scope.$apply();
        });
    })
});
