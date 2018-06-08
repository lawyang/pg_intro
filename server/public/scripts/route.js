const songApp = angular.module('songApp', [ 'ngRoute' ]);

songApp.config( function( $routeProvider ) {
    $routeProvider.when('/',{
        templateUrl: 'views/home.html'
    }).when( '/songs', {
        templateUrl: 'views/songs.html'
    }).otherwise({
        template: '<h2>404 Page Not Found</h2>'
    })
});