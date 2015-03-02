app.controller('MainCtrl', ['$scope','weatherApiService', function($scope, weatherApiService){
    
    $scope.getWeatherByCity = function(city){
    
        weatherApiService.getCityWeather(city).then(function(data){
           $scope.cities = data.response.results;
            console.log(data);
        });
    }
    
}]);