app.controller('MainCtrl', ['$location', '$timeout','weatherApiService', function($location, $timeout, weatherApiService){
    var self = this;
    self.getWeatherByCity = function(searchValue){

        
        weatherApiService.getCityWeather(searchValue).then(function(data){
            
            if(data.response.results)
            {
                self.cities = data.response.results;
                console.log(self.cities);
                $location.path("/cities");          
            }
            else if(data.current_observation)
            {
                self.city = data.current_observation;
                console.log(self.city);
                $location.path("/" + data.current_observation.display_location.city );
            };
        });
        
    };
    
    self.getCityWeatherDetails= function(searchValue,event){
        
        event.preventDefault();
        search = 'zmw:' + searchValue;
        
        weatherApiService.getCityWeather(search).then(function(data){
            
            self.city = data.current_observation;
            console.log(self.city);
            $location.path("/" + data.current_observation.display_location.city );
        });
    };
    
}]);
