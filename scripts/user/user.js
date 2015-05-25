var appUser = angular.module('appUser', ['userRest', 'ngRoute']);

appUser.controller('user',
  function ($scope,userRest) {
      $scope.demo="";
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.data99=data;
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
      userRest.find().success(user);
      
     
});

appUser.controller('createuser',
  function ($scope,userRest,$location) {
      $scope.demo="hello";
    
      var pincode=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.pincode=data;
      };
     userRest.findpincode().success(pincode);
    
      var userloaction=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.userlocation=data;
      };
     userRest.finduserlocation().success(userloaction);
    
    var usercreated=function(data,status)
      {
        console.log(data);
        $location.url("/user");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          userRest.create(data).success(usercreated);
      };
      });

appUser.controller('edituser',
    function ($scope, userRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
      var pincode=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.pincode=data;
          
      };
     userRest.findpincode().success(pincode);
    
      var userloaction=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.userlocation=data;
      };
     userRest.finduserlocation().success(userloaction);
    
    
    
        var finduser = function (data, status) {
            $scope.user = {};
            $scope.user = data;
            $scope.user.pincode=$scope.user.pincode.id;
            $scope.user.dob=moment($scope.user.dob).format('YYYY-MM-DD');
//            $scope.user.dob=$filter('date')($scope.user.date, "dd/MM/yyyy");
            console.log($scope.user.dob);
//                $scope.user.pincode.id;
            $scope.alldata = data;
        };

        userRest.findoneuser($scope.value).success(finduser);

        
        var user = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        userRest.find().success(user);
        
        var updated = function (data, status) {
             userRest.find().success(user);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/user");
            toastr.success("User Updated");
        };


        $scope.update = function (data) {
            userRest.updateuser(data).success(updated);
        };


    });


appUser.controller('deleteuser',
    function ($scope, userRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var finduser = function (data, status) {
            $scope.user = {};
            $scope.user = data;
            $scope.alldata = data;
        };

        userRest.findoneuser($scope.value).success(finduser);

        
        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        userRest.find().success(user);
        
        
        ondelete=function(data,status) {
          toastr.success("User Deleted");
            $location.url("/user");
        userRest.find().success(user);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        userRest.deleteuser($scope.value).success(ondelete);
      };

    });