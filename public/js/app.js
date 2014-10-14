var app = angular.module('eventApp', []);

app.controller('ListCtrl', function($scope, $http) {  
    $scope.events = [];
    $scope.currentEvent = {};
    
    $http.get('/fetch-events')
        .success(function(data) {
            $scope.events = data;
            $scope.currentEvent = $scope.events[0];
        })
        .error(function(data) {
            alert('Error + ' + data);
        });
    
    $scope.changeCurrentEvent = function(event) {
        $scope.currentEvent = event;
    };
});