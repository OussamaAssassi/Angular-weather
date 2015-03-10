app.controller('MainCtrl', ['$scope', '$location', '$timeout','weatherApiService', function($scope, $location, $timeout, weatherApiService){

    $scope.getWeatherByCity = function(searchValue){

        weatherApiService.getCityWeather(searchValue).then(function(data){
            
            if(data.response.results)
            {
                $scope.cities = data.response.results;
                console.log($scope.cities);
                $location.path("/cities");          
            }
            else if(data.current_observation)
            {
                $scope.city = data.current_observation;
                console.log($scope.city);
                $location.path("/" + data.current_observation.display_location.city );
            };
        });
        
    };
    
    $scope.getCityWeatherDetails= function(searchValue,event){
        
        event.preventDefault();
        search = 'zmw:' + searchValue;
        
        weatherApiService.getCityWeather(search).then(function(data){
            
            $scope.city = data.current_observation;
            console.log($scope.city);
            $location.path("/" + data.current_observation.display_location.city );
        });
    };
    
}]);