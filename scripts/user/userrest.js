var userRest = angular.module('userRest', [])



.factory('userRest', function ($http) {
    
    return{
        create: function(data){
            console.log(data);
           return $http.post(apiurl+"user",data);
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"user");
        },
        findpincode: function(){
            console.log();
            return $http.get(apiurl+"pincode");
        },
        finduserlocation: function(){
            console.log();
            return $http.get(apiurl+"userlocation");
        },
        findoneuser: function(id){
            console.log();
            return $http.get(apiurl+"user/"+id)
        },
        deleteuser: function(id){
            return $http.delete(apiurl+"user/"+id,{});
        },
        updateuser: function(data){
            return $http.put(apiurl+"user/"+data.id,data);
        }
    }

});