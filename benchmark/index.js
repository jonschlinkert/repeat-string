'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/{5,50,250,2000,20000}.js',
  add: 'code/{repeat-string,repeating}.js',
  cwd: __dirname
});

suite.run();
