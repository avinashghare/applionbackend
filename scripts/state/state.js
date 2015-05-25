var appState = angular.module('appState', ['stateRest', 'ngRoute']);

appState.controller('state',
  function ($scope,stateRest) {
      $scope.demo="";
      var statesuccess=function(data,status){
          console.log(data);
          if(data=="false")
          {
              $scope.usermessage="No data found";
              $scope.visibletable=false;
            
          }
          else
          {
              
              $scope.visibletable=true;
              $scope.find=data;
          }
      };
      stateRest.find().success(statesuccess);
      
     
});

appState.controller('createstate',
  function ($scope,stateRest,$location) {
      $scope.demo="hello";
    var statecreated=function(data,status)
      {
        console.log(data);
        $location.url("/state");
      }
    
      
      $scope.create=function(data)
      {
          stateRest.create(data).success(statecreated);
      };
      });

appState.controller('editstate',
    function ($scope, stateRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findstate = function (data, status) {
            $scope.state = {};
            $scope.state = data;
            console.log(data);
           // $scope.alldata = data;
        };

        stateRest.findonestate($scope.value).success(findstate);

        
        var state = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        stateRest.find().success(state);
        
        var updated = function (data, status) {
             stateRest.find().success(state);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/state");
            toastr.success("state Updated");
        };


        $scope.update = function (data) {
            stateRest.updatestate(data).success(updated);
        };


    });

appState.controller('deletestate',
    function ($scope, stateRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findstate = function (data, status) {
            $scope.state = {};
            $scope.state = data;
            $scope.state = data;
        };

        stateRest.findonestate($scope.value).success(findstate);

        
        var state = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        stateRest.find().success(state);
        
        
        ondelete=function(data,status) {
          toastr.success("state Deleted");
            $location.url("/state");
        stateRest.find().success(state);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        stateRest.deletestate($scope.value).success(ondelete);
      };

    });