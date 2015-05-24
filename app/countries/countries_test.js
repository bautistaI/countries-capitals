'use strict';

describe('cncApp.countries', function() {

  beforeEach(module('cncApp.countries'));

  describe('CountriesCtrl', function(){

    it('should return a query to get countries', inject(function($controller) {
      //spec body
      var countriesCtrl = $controller('CountriesCtrl');
      expect(CountriesCtrl).toBeDefined();
    }));

  });
});