app.service('weatherApiService', ['$http', '$q', function($http, $q){
    
   var defered = $q.defer();
    
    var getCityWeather = function(city) {
    
        $http.get('http://api.wunderground.com/api/ce5cfc19364396e3/conditions/q/'+ city +'.json')
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