frontendApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/html/templates/page.html',
            controller: 'HomeController'
        })
        .when('/:plugin/:page', {
            templateUrl: 'src/html/templates/page.html',
            controller: 'PageController'
        });
});