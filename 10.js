var app = angular.module('itemApp', []); // Define AngularJS module named 'itemApp'
app.controller('itemController', function ($scope) { // Define controller named 'itemController' and inject $scope
    $scope.items=['Item 1', 'Item 2', 'Item 3']; // Initialize items array with some items
    $scope.newItem=''; // Initialize newItem variable

    // Function to add new item
    $scope.addItem = function() { 
        $scope.errortext = ""; // Clear error message

        // Check if newItem is empty
        if (!$scope.newItem) {
            return;
        }
        
        // Check if newItem already exists in items array
        if ($scope.items.indexOf($scope.newItem) === -1) {
            $scope.items.push($scope.newItem); // Add newItem to items array
            $scope.newItem = ''; // Clear newItem
        } else {
            $scope.errortext = "The item is already in the collection."; // Set error message
        }
    };

    // Function to remove item
    $scope.removeItem = function(index) { 
        $scope.items.splice(index, 1); // Remove item at specified index from items array
    };
});
