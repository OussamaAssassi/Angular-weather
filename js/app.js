'use strict'

var app = angular.module('angularWeather', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/cities', {
            templateUrl: 'partials/cities-list.html'
        })
        .when('/:city', {
            templateUrl: 'partials/city-details.html'
        })
       .otherwise({redirectTo:'/'});
}]);