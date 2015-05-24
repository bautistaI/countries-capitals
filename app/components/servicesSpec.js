describe("cncRequest", function(){
	beforeEach(module("cncApp.services"));

	it('should query the geoname API',
		inject(function(cncRequest, $rootScope, $httpBackend){
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?&username=isra26').respond(200);
			var status = false;
			cncRequest(response.data.geonames).success(function(){
				status = true;
			});
			$rootScope.$digest();
			$httpBackend.flush();
			expect(status).toBe(true);
			$httpBackend.verifyNoOutstandingRequest();
		}));
});

// describe("cncRequest", function() {
// 	beforeEach(module('cncApp.services'));

// 	it("should query the geonames API",
// 	inject(function(cncRequest, $httpBackend) {
// 		$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?&username=isra26').respond(200);
// 	}));
// 	$httpBackend.flush();
// 	expect(status).toBe(true);
// 	$httpBackend.verifyNoOutstandingRequest();
// });