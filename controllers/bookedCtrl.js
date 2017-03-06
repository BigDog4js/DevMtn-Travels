angular.module("devmtnTravel").controller("bookedCtrl",function($scope, $stateParams, mainSrv){
    
    $scope.locations = mainSrv.travelInfo
    console.log($scope.locations)
    console.log(typeof $stateParams.id)
    
    // loop through $scope.locations
    
    // compare $stateParams.id to each location's id
    
    // save correct location on $scope.location
    
    for(var i = 0; i < $scope.locations.length; i++){
        if($stateParams.id == $scope.locations[i].id){
            $scope.bookedLocation = $scope.locations[i]
            $scope.bookedStyle = {'background': 'url(' + $scope.bookedLocation.image + ') no-repeat center center / cover'}
            
        }
        
        
        
    }
    
    
    
    
})