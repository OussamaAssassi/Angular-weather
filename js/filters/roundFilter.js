app.filter('round', function(){
    return function(value){
        var roundedValue = Math.round(value)
        return roundedValue;
    }
});