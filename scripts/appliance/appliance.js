var appAppliance = angular.module('appAppliance', ['applianceRest', 'ngRoute']);

appAppliance.controller('appliance',
    function ($scope, applianceRest) {
        $scope.demo = "";
        var appliancesuccess = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.usermessage = "No data found";
                $scope.visibletable = false;

            } else {

                $scope.visibletable = true;
                $scope.find = data;
            }
        };
        applianceRest.find().success(appliancesuccess);


    });

appAppliance.controller('createappliance',
    function ($scope, applianceRest, $location) {
        $scope.demo = "hello";

        var appliancetype = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.appliancetype = data;
        };
        applianceRest.findappliancetype().success(appliancetype);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        applianceRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        applianceRest.finduser().success(user);

        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.store = data;
        };
        applianceRest.findstore().success(store);

        var appliancecreated = function (data, status) {
            console.log(data);
            $location.url("/appliance");
        }


        $scope.create = function (data) {
            console.log(data);
            applianceRest.create(data).success(appliancecreated);
        };
    });

appAppliance.controller('editappliance',
    function ($scope, applianceRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        toastr.success($scope.value);
        
        $scope.appliancesele={};

        $scope.addcomponentwarranty = function () {
            $scope.appliance.componentwarranty.push({
                component: "",
                serial: '',
                warrantyperiod: '',
                bill: '',
                warrentycard: ''
            });
        };
        $scope.removecomponentwarranty = function (i) {
            $scope.appliance.componentwarranty.splice(i, 1);
        };

        $scope.addwarranty = function () {
            $scope.appliance.warranty.push({
                component: "",
                serial: '',
                warrantyperiod: '',
                bill: '',
                warrentycard: ''
            });
        };
        $scope.removewarranty = function (i) {
            $scope.appliance.warranty.splice(i, 1);
        };

        $scope.pageview = 1;
        $scope.changepageview = function (num) {
            $scope.pageview = num;
        }


        var appliancetype = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.appliancetype = data;
        };
        applianceRest.findappliancetype().success(appliancetype);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        applianceRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        applianceRest.finduser().success(user);

        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.store = data;
        };
        applianceRest.findstore().success(store);

        var findappliance = function (data, status) {
            $scope.appliance = {};
            $scope.appliance = data;
            $scope.appliance.appliancetype = $scope.appliance.appliancetype.id;
            $scope.appliance.brand = $scope.appliance.brand.id;
            $scope.appliance.user = $scope.appliance.user.id;
            $scope.appliance.store = $scope.appliance.store.id;
            _.each($scope.appliance.warranty, function (n) {
                n.expiry = moment(n.expiry).format('YYYY-MM-DD');
            });

            console.log(data);
            // $scope.alldata = data;
        };

        applianceRest.findoneappliance($scope.value).success(findappliance);


        var appliance = function (data, status) {
            console.log(data);
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        applianceRest.find().success(appliance);

        var updated = function (data, status) {
            applianceRest.find().success(appliance);
            // $scope.visibletable = true;
            // $scope.updatearea = false;
            $location.url("/appliance");
            toastr.success("appliance Updated");
        };


        $scope.update = function (data) {
            applianceRest.updateappliance(data).success(updated);
        };


    });

appAppliance.controller('deleteappliance',
    function ($scope, applianceRest, $location, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.value = $routeParams.id;
        console.log($scope.value);
        toastr.success($scope.value);


        var appliancetype = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.appliancetype = data;
        };
        applianceRest.findappliancetype().success(appliancetype);

        var brand = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.brand = data;
        };
        applianceRest.findbrand().success(brand);

        var user = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.user = data;
        };
        applianceRest.finduser().success(user);

        var store = function (data, status) {
            console.log(data);
            // $scope.find=data;
            $scope.store = data;
        };
        applianceRest.findstore().success(store);

        var findappliance = function (data, status) {
            $scope.appliance = {};
            $scope.appliance = data;
            $scope.alldata = data;
            $scope.appliance.appliancetype = $scope.appliance.appliancetype.id;
            $scope.appliance.brand = $scope.appliance.brand.id;
            $scope.appliance.user = $scope.appliance.user.id;
            $scope.appliance.store = $scope.appliance.store.id;
        };

        applianceRest.findoneappliance($scope.value).success(findappliance);


        var appliance = function (data, status) {
            console.log(data);
            // $scope.find=data;
            if (data == "false") {
                $scope.demo = "No data found";
                $scope.visibletable = false;

            } else {
                $scope.find = data;
            }
        };
        applianceRest.find().success(appliance);


        ondelete = function (data, status) {
            toastr.success("appliance Deleted");
            $location.url("/appliance");
            applianceRest.find().success(appliance);
        };


        $scope.delete = function () {
            // $scope.usermessage=id;
            applianceRest.deleteappliance($scope.value).success(ondelete);
        };

    });