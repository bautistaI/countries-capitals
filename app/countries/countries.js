'use strict';

angular.module('cncApp.countries', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/countries', {
  templateUrl : 'countries/countries.html',
  controller : 'CountriesCtrl'
  })
  .when('/countries/:country', {
	templateUrl : 'countries/capital.html',
	controller : 'CapitalCtrl',
  })
  .when('/error', {
  template: '<p>Error page Not Found</p>'
  });
}])
.controller('CountriesCtrl', ['$scope', 'cncRequest',
	function($scope, cncRequest){
	$scope.loadCountries = function(data){
		cncRequest.getCountries(data)
		.then(function(response){
				var countryArray = response.data.geonames;
				//console.log(JSON.stringify(countryArray));
				$scope.countries = countryArray;
			},
			function(response){
				// error message
			}
		);
	};
	$scope.loadCountries();
}])
.controller('CapitalCtrl', ['$scope', '$routeParams', 'cncRequest',
	function($scope, $routeParams, cncRequest){
		cncRequest.getCountry($routeParams.country)
		.then(function(response){
			//console.log(response);
			$scope.country = response.data.geonames[0];
			//console.log(capital);
		}),
		cncRequest.getCapital($routeParams.country)
		.then(function(response){
			$scope.capital = response.data.geonames[0];
		}),
		cncRequest.getNeighbours($routeParams.country)
		.then(function(response){
			console.log(response);
			$scope.neighbours = response.data.geonames;
		})
}]);




