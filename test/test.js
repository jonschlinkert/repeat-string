var expect = require('chai').expect;
var repeat = require('../');

describe('repeat', function () {
  it('should repeat the given string n times', function () {
    var actual = repeat('foo', 10);
    var expected = 'foofoofoofoofoofoofoofoofoofoo';
    expect(actual).to.eql(expected);
  });
});
