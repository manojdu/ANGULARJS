var app = angular.module('dateApp', []); // Define AngularJS module named 'dateApp'
app.controller('dateController', function($scope, $filter) { // Define controller named 'dateController' and inject $scope and $filter
    $scope.currentDate = new Date(); // Get current date and time
    $scope.formattedDate = $filter('date')($scope.currentDate, 'yyyy-MM-dd'); // Format current date to yyyy-MM-dd format
    $scope.formattedTime = $filter('date')($scope.currentDate, 'HH:mm:ss'); // Format current time to HH:mm:ss format
});
