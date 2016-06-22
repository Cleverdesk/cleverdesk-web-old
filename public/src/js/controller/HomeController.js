frontendApp.controller('HomeController', function($scope, $log, $routeParams, communicator, parser) {
    communicator.getPage('cleverdesk', 'home').then(function(page) {
        parser.parsePage(page).then(function(components) {
            $scope.components = components;
            $scope.$apply();
        });
    }, function(e) {
        $scope.components = [{"name":"Label","text":"Home Not Found"},{"name":"Label","text":"No Home Page has been set!!!"}];
        $scope.$apply();
    });
});
