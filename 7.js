var app = angular.module('crudApp', []); // Define AngularJS module

app.controller('crudController', function ($scope) { // Define controller
    $scope.users = [ // Initialize users array
        { id: 1, name: 'Dravid', email: 'dravid@gmail.com' },
        { id: 2, name: 'Virat', email: 'virat@gmail.com' },
        { id: 3, name: 'Rahul', email: 'rahul@gmail.com' }
    ];
    $scope.newUser = { name: '', email: '' }; // Initialize newUser object
    $scope.editingUser = null; // Initialize editingUser to null

    // Function to add a new user
    $scope.addUser = function () {
        if ($scope.newUser.name && $scope.newUser.email) { // Check if name and email are provided
            $scope.newUser.id = $scope.users.length + 1; // Assign unique ID to the new user
            $scope.users.push(angular.copy($scope.newUser)); // Add the new user to the users array
            $scope.newUser = { name: '', email: '' }; // Clear newUser object
        }
    };

    // Function to edit a user
    $scope.editUser = function (user) {
        $scope.editingUser = angular.copy(user); // Set editingUser to a copy of the selected user
    };

    // Function to update user details
    $scope.updateUser = function () {
        var index = $scope.users.findIndex(user => user.id == $scope.editingUser.id); // Find the index of the editingUser
        if (index != -1) { // Check if editingUser exists
            $scope.users[index] = angular.copy($scope.editingUser); // Update user details
            $scope.editingUser = null; // Reset editingUser to null
        }
    };

    // Function to delete a user
    $scope.deleteUser = function (user) {
        var confirmDelete = confirm('Are you sure you want to delete this user?'); // Confirm deletion
        if (confirmDelete) {
            $scope.users = $scope.users.filter(u => u.id != user.id); // Remove user from the array of users
            $scope.editingUser = null; // Reset editingUser to null after removing user
        }
    };

    // Function to cancel editing
    $scope.cancelEdit = function () {
        $scope.editingUser = null; // Reset editingUser to null
    };
});
