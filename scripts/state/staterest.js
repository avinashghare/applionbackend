var stateRest = angular.module('stateRest', [])



.factory('stateRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/state/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/state/find");
        },
        findonestate: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/state/findone?id="+id,{})
        },
        deletestate: function(id){
            return $http.get(apiurl+"/index.php/state/delete?id="+id,{});
        },
        updatestate: function(data){
            return $http.get(apiurl+"/index.php/state/update",{params:data});
        }
    }

});