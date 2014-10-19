'use strict';
angular.module('cncApp.services', [])
.constant('API_PREFIX', 'http://api.geonames.org')
.constant('LIST_COUNTRIES', '/countryInfoJSON?')
.constant('USER_NAME', '&username=isra26')
.constant('SEARCH', '/searchJSON?')
.constant('COUNTRY', 'country=')
.constant('NEIGHBOURS', '/neighboursJSON?')

// Refactored to add the logic inside the factory and away from the controllers using defer object, promise
.factory('cncRequest', ['$http', '$q', 'API_PREFIX', 'LIST_COUNTRIES', 'SEARCH', 'COUNTRY', 'NEIGHBOURS', 'USER_NAME', function($http, $q, API_PREFIX, LIST_COUNTRIES, SEARCH, COUNTRY, NEIGHBOURS, USER_NAME){
	return{
		getCountries : function(){
			// instance of defer object
			var d = $q.defer();
			// http request
			$http.get(API_PREFIX + LIST_COUNTRIES + USER_NAME, {cache:true})
			.then(function(response){
				// if success collect the data (response) from geonames, if not provide reason for error on reject object
				d.resolve(response.data.geonames);
			}, function err(reason){
				d.reject(reason);
			});
			// if data collected succesfully return it as a promise object
			return d.promise;
		},
		getCountry : function(countryCode){
			var d = $q.defer();
			$http.get(API_PREFIX + LIST_COUNTRIES + COUNTRY + countryCode + USER_NAME)
			.then(function(response){
				d.resolve(response.data.geonames[0]);
			}, function err(reason){
				d.reject(reason);
			});
			return d.promise;
		},
		getCapital : function(countryCode){
			var d = $q.defer();
			$http.get(API_PREFIX + SEARCH + COUNTRY + countryCode + USER_NAME)
			.then(function(response){
				d.resolve(response.data.geonames[0]);
			}, function err(reason){
				d.reject(reason);
			});
			return d.promise;
		},
		getNeighbours : function(countryCode){
			var d = $q.defer();
			$http.get(API_PREFIX + NEIGHBOURS + COUNTRY + countryCode + USER_NAME)
			.then(function(response){
				d.resolve(response.data.geonames);
			}, function err(reason){
				d.reject(reason);
			});
			return d.promise;
		}
	};
}]);