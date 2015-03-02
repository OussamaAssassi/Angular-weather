app.controller('MainCtrl', ['$scope','openWeatherMapService', function($scope, openWeatherMapService){
    
    $scope.getWeatherByCity = function(city){
    
        openWeatherMapService.getCityWeather(city).then(function(data){
           $scope.cityWeather = data;
            console.log(data);
        });
    }
    
}]);