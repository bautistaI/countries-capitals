'use strict';

angular.module('cncApp.version', [
  'cncApp.version.interpolate-filter',
  'cncApp.version.version-directive'
])

.value('version', '0.1');
