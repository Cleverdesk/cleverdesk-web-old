frontendApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/html/templates/page.html',
            controller: 'HomeController'
        })
        .when('/auth', {
            templateUrl: 'src/html/templates/auth.html',
            controller: 'AuthController'
        })
        .when('/:plugin/:page', {
            templateUrl: 'src/html/templates/page.html',
            controller: 'PageController'
        });
});