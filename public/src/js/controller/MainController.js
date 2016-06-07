frontendApp.controller('MainController', function($scope, $log, communicator) {
    communicator.getPages().then(function(pages) {
        $scope.pages = pages;
        $scope.$apply()
    });
});
