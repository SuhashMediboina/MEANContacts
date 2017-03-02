var myApp = angular.module('myApp', []);

myApp.controller('AppCntrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello from the controller");
  $http.get('/contactlist').then(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response.data;
  });
  $scope.addContact = function() {
     console.log($scope.contact); 
  };
}]);