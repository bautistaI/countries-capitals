'use strict';

// Declare app level module which depends on views, and components
angular.module('cncApp', [
	'ngRoute',
  'ngAnimate',
	'cncApp.services', 
	'cncApp.home', 
	'cncApp.version', 
	'cncApp.countries'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home/home.html'
  });
}])

.run(function($rootScope, $location, $timeout) {
  $rootScope.$on('$routeChangeError', function() {
    $location.path("/error");
  });
  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.isLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', function() {
    $timeout(function() {
      $rootScope.isLoading = false;
    }, 1000);
  });
});
