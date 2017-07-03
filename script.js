(function() {
    var test = angular.module("test", []);
    var maincontroller = function($scope, $http, $log) {

        var onComplete = function(response) {
            //console.log(response.data);
            $scope.posts = response.data;
            $scope.isVisible = true;
            $log.log("successfully fetched data");

        };
        var onCompleteDetails = function(response) {
            // console.log(response.data);
            $scope.postsDetails = response.data;
            $scope.isVisible = true;
            $log.log("successfully fetched data");

        };
        $scope.userName = 'Angular';
        var onError = function(reason) {
            $scope.error = "there is some errror while feching data";
            $scope.isVisible = false;
            $log.log("error while fetching data")
        };
        var promise = $http.get("https://api.github.com/users");
        promise.then(onComplete, onError);
        $scope.filteruser = function() {
            //console.log('hi');
            $scope.posts = '';
            var promiseClick = $http.get("https://api.github.com/users/" + $scope.userName);
            promiseClick.then(onComplete, onError);

        };
        $scope.clear = function() {
            $scope.userName = '';
            var promise = $http.get("https://api.github.com/users");
            promise.then(onComplete, onError);
        };
        $scope.details = function(id) {
            var promise = $http.get("https://api.github.com/users/" + id);
            promise.then(onCompleteDetails, onError);
        };

    }


    test.controller("testController", ["$scope", "$http", "$log", maincontroller]);
}());