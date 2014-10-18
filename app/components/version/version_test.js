'use strict';

describe('cncApp.version module', function() {
  beforeEach(module('cncApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
