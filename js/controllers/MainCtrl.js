app.controller('MainCtrl', ['$scope', '$location', '$timeout','weatherApiService', function($scope, $location, $timeout, weatherApiService){

    $scope.getWeatherByCity = function(){

        weatherApiService.getCityWeather($scope.search).then(function(data){


            if(data.response.results)
            {
                $scope.cities = data.response.results;
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
    
}]);