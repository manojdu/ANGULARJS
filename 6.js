var app = angular.module('todoApp', []); // Define AngularJS module

app.controller('TodoController', function ($scope) { // Define controller
    $scope.tasks = ["Task 1", "Task 2", "Task 3"]; // Initialize tasks array

    // Function to add a new task
    $scope.addTask = function () {
        if ($scope.newTask) {
            $scope.tasks.push($scope.newTask); // Add new task to the array
            $scope.newTask = ''; // Clear the input field
        }
    };

    // Function to edit a task
    $scope.editTask = function (index) {
        var editedTask = prompt("Edit task", $scope.tasks[index]); // Prompt user to edit task
        if (editedTask !== null) {
            $scope.tasks[index] = editedTask; // Update task with edited task
        }
    };

    // Function to delete a task
    $scope.deleteTask = function (index) {
        var confirmDelete = confirm('Are you sure you want to delete this task?'); // Confirm deletion
        if (confirmDelete) {
            $scope.tasks.splice(index, 1); // Remove task from the array
        }
    };
});
