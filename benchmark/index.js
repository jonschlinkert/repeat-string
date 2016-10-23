'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/{5,50,250,2000,20000}.js',
  code: 'code/{repeat-string,repeat-string-1.5.4,repeating,native}.js',
});

suite.run();
