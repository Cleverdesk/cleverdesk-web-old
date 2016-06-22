frontendApp.controller('AuthController', function($scope, $log, $location, auth) {
    $scope.auth = function() {
        auth.auth($scope.username, $scope.password).then(function() {
            $scope.refreshPages();
            $location.path('/');
        }, function() {
            $scope.error = true;
        });
    }
});
