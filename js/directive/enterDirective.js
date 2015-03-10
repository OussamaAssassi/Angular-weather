app.directive('enterKey', function(){
    return function(scope, element, attr) {
        element.bind('keypress keydown', function(e){
            if(e.keyCode === 13)
            {
                scope.$apply(function(){
                    scope.$eval(attr.enterKey, {'event':event});
                });
            }
        })
    }
});