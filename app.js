angular.module('countryApp', [
  'countryApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "country-list.html", controller: "CountryListCtrl"}).
	when("/:countryName", {templateUrl: "country-detail.html", controller: "CountryDetailCtrl"}).
	otherwise({redirectTo: '/'});
}]);