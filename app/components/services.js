'use strict';
angular.module('cncApp.services', [])
.constant('API_PREFIX', 'http://api.geonames.org')
.constant('LIST_COUNTRIES', '/countryInfoJSON?')
.constant('USER_NAME', '&username=isra26')
.constant('SEARCH', '/searchJSON?')
.constant('COUNTRY', 'country=')
.constant('NEIGHBOURS', '/neighboursJSON?')

// makes round trip to server to get data
.factory('cncRequest', ['$http', 'API_PREFIX', 'LIST_COUNTRIES', 'SEARCH', 'COUNTRY', 'NEIGHBOURS', 'USER_NAME', function($http, API_PREFIX, LIST_COUNTRIES, SEARCH, COUNTRY, NEIGHBOURS, USER_NAME){
	return{
		getCountries : function(data){
			return $http.get(API_PREFIX + LIST_COUNTRIES + USER_NAME, {cache:true});
		},
		getCountry : function(countryCode){
			// Format request to get: http://api.geonames.org/countryInfoJSON?country=AD&username=isra26   where AD is the countryCode
			return $http.get(API_PREFIX + LIST_COUNTRIES + COUNTRY + countryCode + USER_NAME);
		},
		getCapital : function(countryCode){
			// Format request to get: http://api.geonames.org/searchJSON?country=AD&username=isra26
			return $http.get(API_PREFIX + SEARCH + COUNTRY + countryCode + USER_NAME);
		},
		getNeighbours : function(countryCode){
			// Format request to get: http://api.geonames.org/neighboursJSON?country=AD&username=isra26
			return $http.get(API_PREFIX + NEIGHBOURS + COUNTRY + countryCode + USER_NAME);
		}
	};
}]);
