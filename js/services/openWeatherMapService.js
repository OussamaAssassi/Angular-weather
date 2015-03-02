app.service('openWeatherMapService', ['$http', '$q', function($http, $q){
    
   var defered = $q.defer();
    
    var getCityWeather = function(city) {
    
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=d9b8499a111a4db43b57133624b47a80&lang=fr&units=metric')
            .success(function(data){
                defered.resolve(data);
            })
            .error(function(status){
                defered.reject('error ' + status);
            })

            return defered.promise;
    }
    
    return {
        getCityWeather : getCityWeather
    }
}]);