var app = angular.module('employeeApp', []); // Define AngularJS module named 'employeeApp'
app.controller('employeeController', function ($scope) { // Define controller named 'employeeController' and inject $scope
    // Array of employees with name and salary
    $scope.employees = [
        { name: 'SHARATH', salary: 50000 }, 
        { name: 'PRAVEEN', salary: 55000 }, 
        { name: 'SUMANTH', salary: 60000 }, 
        { name: 'MANOJ', salary: 65000 },
    ];
    
    $scope.searchName = ''; // Initialize searchName variable
    $scope.searchSalary = ''; // Initialize searchSalary variable
}); 
