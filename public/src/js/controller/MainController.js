frontendApp.controller('MainController', function($scope, $log, $location, communicator) {
    $scope.refreshPages = function() {
        communicator.getPages().then(function (pages) {
            $scope.pages = pages;
            $scope.$apply();
        }, function () {
            $location.path('/auth');
        });
    };
    if ($location.path() !== '/auth') {
        $scope.refreshPages();
    }
});
