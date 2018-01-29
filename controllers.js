angular.module('countryApp.controllers', [])

  .controller('CountryListCtrl', function($scope,$http) {
    $scope.description= "";
      
    $scope.irADetalle = function(country){
                
        $scope.description = country.description;
        
    }
      
    $http({
      method: 'GET',
      url: 'countries.json'
    }).then(function (success){      
      $scope.countries = success.data;

    },function (error){

    }); 


  })

  .controller('CountryDetailCtrl', function($scope, $routeParams, $http) {
    $scope.name = $routeParams.countryName;

    $http({
      method: 'GET',
      url: 'countries.json'
    }).then(function (success){    
      $scope.country = success.data.filter(function(entry){
        return entry.name === $scope.name;
      })[0];

    },function (error){

    });  

  });