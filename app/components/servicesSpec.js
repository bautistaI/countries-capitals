describe("cncRequest", function() {
	beforeEach(module('cncApp.services'));

	it("should query the geonames API",
	inject(function(cncRequest, $httpBackend) {
		$httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?&username=isra26').respond(200);
	}));
	$httpBackend.flush();
	expect(status).toBe(true);
	$httpBackend.verifyNoOutstandingRequest();
});