var appStore = angular.module('appStore', ['storeRest', 'ngRoute']);

appStore.controller('store',
  function ($scope,storeRest) {
      $scope.demo="";
      var storesuccess=function(data,status){
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
      storeRest.find().success(storesuccess);
      
     
});

appStore.controller('createstore',
  function ($scope,storeRest,$location) {
      $scope.demo="hello";
    
      var pincode=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.pincode=data;
          
      };
     storeRest.findpincode().success(pincode);
    
      var holidaycalender=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.holidaycalender=data;
          
      };
     storeRest.findholidaycalender().success(holidaycalender);
    
      var brand=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.brand=data;
      };
     storeRest.findbrand().success(brand);
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     storeRest.finduser().success(user);
    
    
    var storecreated=function(data,status)
      {
        console.log(data);
        $location.url("/store");
      }
    
      
      $scope.create=function(data)
      {
          console.log(data);
          storeRest.create(data).success(storecreated);
      };
      });

appStore.controller('editstore',
    function ($scope, storeRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);

    
    
        $scope.addrating = function () {
            $scope.store.rating.push({user:'',globalrating:"",timelyrating:'',servicechargesrating:'',servicequalityrating:''});
        };
        $scope.removerating = function (i) {
            $scope.store.rating.splice(i, 1);
        };
        $scope.addcallrating = function () {
            $scope.store.callrating.push({spokentoname:"",discussion:'',rating:''});
        };
        $scope.removecallrating = function (i) {
            $scope.store.callrating.splice(i, 1);
        };
    $scope.addservicereport = function () {
            $scope.store.servicereport.push({
                calltype: "",
                agencyname: '',
                serviceengineername: '',
                problemdetail: '',
                servicerender: '',
                callstatus: '',
                feedback: '',
                globalrating: '',
                timelyrating: '',
                servicechangesrating: '',
                servicequalityrating: ''
            });
        };
        $scope.removeservicereport = function (i) {
            $scope.store.servicereport.splice(i, 1);
        };
    
        $scope.pageview = 1;
        $scope.changepageview = function (num) {
            $scope.pageview = num;
        }

    
      var pincode=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.pincode=data;
          
      };
     storeRest.findpincode().success(pincode);
    
      var brand=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.brand=data;
      };
     storeRest.findbrand().success(brand);
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     storeRest.finduser().success(user);
    
      var holidaycalender=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.holidaycalender=data;
          
      };
     storeRest.findholidaycalender().success(holidaycalender);
    
        var findstore = function (data, status) {
            $scope.store = {};
            $scope.store = data;
            $scope.store.pincode=$scope.store.pincode.id;
            $scope.store.user=$scope.store.user.id;
            $scope.store.rating.user=$scope.store.rating.user.id;
            $scope.store.holidaycalender=$scope.store.holidaycalender.id;
            console.log(data);
           // $scope.alldata = data;
        };

        storeRest.findonestore($scope.value).success(findstore);

        
        var store = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        storeRest.find().success(store);
        
        var updated = function (data, status) {
             storeRest.find().success(store);
           // $scope.visibletable = true;
           // $scope.updatearea = false;
             $location.url("/store");
            toastr.success("store Updated");
        };


        $scope.update = function (data) {
            console.log(data);
            storeRest.updatestore(data).success(updated);
        };


    });

appStore.controller('deletestore',
    function ($scope, storeRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);

    
    
      var pincode=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.pincode=data;
          
      };
     storeRest.findpincode().success(pincode);
    
      var brand=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.brand=data;
      };
     storeRest.findbrand().success(brand);
    
      var user=function(data,status){
          console.log(data);
          // $scope.find=data;
          $scope.user=data;
      };
     storeRest.finduser().success(user);
    
    
        var findstore = function (data, status) {
            $scope.store = {};
            $scope.store = data;
            $scope.store.pincode=$scope.store.pincode.id;
            $scope.store.user=$scope.store.user.id;
            console.log(data);
           // $scope.alldata = data;
        };

        storeRest.findonestore($scope.value).success(findstore);

        
        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        storeRest.find().success(store);
        
        
        ondelete=function(data,status) {
          toastr.success("store Deleted");
            $location.url("/store");
        storeRest.find().success(store);  
      };
      
      
      $scope.delete=function(){
         // $scope.usermessage=id;
        storeRest.deletestore($scope.value).success(ondelete);
      };

    });