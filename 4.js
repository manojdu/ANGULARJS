var app = angular.module('myApp', []); // Define AngularJS module

app.controller('CalculatorController', function ($scope) { // Define controller
    $scope.inputNumber = 0; // Initialize inputNumber to 0
    $scope.factorialResult = null; // Initialize factorialResult to null
    $scope.squareResult = null; // Initialize squareResult to null

    // Function to calculate factorial
    $scope.calculateFactorial = function () {
        $scope.factorialResult = factorial($scope.inputNumber); // Calculate factorial
    };

    // Function to calculate square
    $scope.calculateSquare = function () {
        $scope.squareResult = $scope.inputNumber * $scope.inputNumber; // Calculate square
    };

    // Recursive function to calculate factorial
    function factorial(n) {
        if (n === 0 || n === 1) { // Base case: if n is 0 or 1, factorial is 1
            return 1;
        } else {
            return n * factorial(n - 1); // Recursive call to calculate factorial
        }
    }

    // Function to calculate square
    function square(n) {
        return n * n; // Return square of the number
    }
});
