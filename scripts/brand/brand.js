var appBrand = angular.module('appBrand', ['brandRest', 'ngRoute']);

appBrand.controller('brand',
  function ($scope,brandRest) {
      $scope.demo="";
      var brandsuccess=function(data,status){
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
      brandRest.find().success(brandsuccess);
      
     
});

appBrand.controller('createbrand',
  function ($scope,brandRest,$location) {
      $scope.demo="hello";
    var brandcreated=function(data,status)
      {
        console.log(data);
        $location.url("/brand");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          brandRest.create(data).success(brandcreated);
      };
      });

appBrand.controller('editbrand',
    function ($scope, brandRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

        var findbrand = function (data, status) {
            $scope.brand = {};
            $scope.brand = data;
//            $scope.brand.status=$scope.brand.pincode.id;
            console.log(data);
           // $scope.alldata = data;
        };

        brandRest.findonebrand($scope.value).success(findbrand);

        
        var brand = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        brandRest.find().success(brand);
        
        var updated = function (data, status) {
             brandRest.find().success(brand);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/brand");
            toastr.success("brand Updated");
        };


        $scope.update = function (data) {
            brandRest.updatebrand(data).success(updated);
        };


    });

appBrand.controller('deletebrand',
    function ($scope, brandRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

        var findbrand = function (data, status) {
            $scope.brand = {};
            $scope.brand = data;
            $scope.alldata = data;
        };

        brandRest.findonebrand($scope.value).success(findbrand);

        
        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        brandRest.find().success(brand);
        
        
        ondelete=function(data,status) {
          toastr.success("brand Deleted");
            $location.url("/brand");
        brandRest.find().success(brand);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        brandRest.deletebrand($scope.value).success(ondelete);
      };

    });