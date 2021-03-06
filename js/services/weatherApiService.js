app.service('weatherApiService', ['$http', '$q', function($http, $q){
    
    var getCityWeather = function(seachValue) {
        
        var defered = $q.defer();
        var search = seachValue;
        
        $http.get('http://api.wunderground.com/api/ce5cfc19364396e3/conditions/lang:FR/q/'+ search +'.json')
            .success(function(data){
                defered.resolve(data);
            })
            .error(function(status){
                defered.reject('error ' + status);
            })
            
        return defered.promise;
    };
    
    return {
        getCityWeather : getCityWeather
    }
}]);