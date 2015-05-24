'use strict';

angular.module('cncApp.countries', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/countries', {
  templateUrl : 'countries/countries.html',
  controller : 'CountriesCtrl',
  resolve: {
      // Gets a list of all countries if the promise is successful
      countries: function(cncRequest){
      return cncRequest.getCountries();
      }
    }
  })
  .when('/countries/:country', {
	templateUrl : 'countries/capital.html',
	controller : 'CapitalCtrl',
	resolve: {
  // *** use  $route.current.params.keyValue   instead. The $routeParams is updated only after a route is changed *** 
  // gets info one the clicked country (country name, population, area, capital, population of capital, and neighbours)
      country: function($route, cncRequest){
      return cncRequest.getCountry($route.current.params.country);
      },
      capital: function($route, cncRequest){
      return cncRequest.getCapital($route.current.params.country);
      },
      neighbours: function($route, cncRequest){
      return cncRequest.getNeighbours($route.current.params.country);
      }
    }
  })
  .when('/error', {
    template: '<p>Error page Not Found</p>'
  });
}])
.controller('CountriesCtrl', ['$scope', 'countries', function($scope, countries){
	$scope.countries = countries;
}])
.controller('CapitalCtrl', ['$scope', 'country', 'capital', 'neighbours', function($scope, country, capital, neighbours){
	$scope.country = country;
	$scope.capital = capital;
	$scope.neighbours = neighbours;
}]);
