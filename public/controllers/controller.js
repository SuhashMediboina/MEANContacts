var myApp = angular.module('myApp', []);

myApp.controller('AppCntrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello from the controller");
    
  var refresh = function() {
      $http.get('/contactlist').then(function(response) {
          console.log("I got the data I requested");
          $scope.contactlist = response.data;
          console.log(response.data);
      });
  };
    
 refresh();
    
  $scope.addContact = function() {
     console.log($scope.contact); 
     $http.post('/contactlist', $scope.contact).then(function(response) {
         console.log(response);
         refresh();
         $scope.contact = "";
     })
  };
}]);