(function () {

  var app = angular.module('engine');

  app.controller("NpcController", function($scope, $stateParams, $http) {

    var request = app.api + "creature/template/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      $scope.template = data[0];
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE TEMPLATE $http.get request");
    });

    var request = app.api + "creature/queststarter/id/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      if (data.length > 0) {
        $scope.npcQueststarters = data;
      } else {
        // TO DO
      }
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE TEMPLATE $http.get request");
    });


  });

})()
