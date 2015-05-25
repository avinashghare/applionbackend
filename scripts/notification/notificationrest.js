var notificationRest = angular.module('notificationRest', [])



.factory('notificationRest', function ($http) {
    
    return{
        create: function(data){
            console.log();
           return $http.get(apiurl+"/index.php/notification/create",{params:data});
        },
        find: function(){
            console.log();
            return $http.get(apiurl+"/index.php/notification/find");
        },
        findonenotification: function(id){
            console.log();
            return $http.get(apiurl+"/index.php/notification/findone?id="+id,{})
        },
        deletenotification: function(id){
            return $http.get(apiurl+"/index.php/notification/delete?id="+id,{});
        },
        updatenotification: function(data){
            return $http.get(apiurl+"/index.php/notification/update",{params:data});
        }
    }

});