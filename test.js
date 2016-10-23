/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var repeat = require('./');

describe('repeat', function() {
  it('should return an empty string when a number is not given:', function() {
    assert.equal(repeat('a'), '');
  });

  it('should return an empty string when zero or null is given as the number:', function() {
    assert.equal(repeat('', 0), '');
    assert.equal(repeat('a', 0), '');
    assert.equal(repeat('', null), '');
    assert.equal(repeat('a', null), '');
  });

  it('should repeat the given string n times', function() {
    assert.equal(repeat(' ', 0), '');
    assert.equal(repeat('a', 0), '');
    assert.equal(repeat('a', 1), 'a');
    assert.equal(repeat('a', 2), 'aa');
    assert.equal(repeat('a', 3), 'aaa');
    assert.equal(repeat('   ', 3), '         ');
    assert.equal(repeat('a ', 3), 'a a a ');
    assert.equal(repeat('a', 10), 'aaaaaaaaaa');
    assert.equal(repeat('b ', 10), 'b b b b b b b b b b ');
    assert.equal(repeat('a ', 10), 'a a a a a a a a a a ');
    assert.equal(repeat('abc ', 25), 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc ');
  });

  it('should allow the multiplier to be a string:', function() {
    assert.equal(repeat('a', '0'), '');
    assert.equal(repeat('a', '1'), 'a');
    assert.equal(repeat('a', '2'), 'aa');
    assert.equal(repeat('a', '10'), 'aaaaaaaaaa');
    assert.equal(repeat('b ', '10'), 'b b b b b b b b b b ');
    assert.equal(repeat('a ', '10'), 'a a a a a a a a a a ');
  });

  it('should cache strings until the string changes:', function() {
    assert.equal(repeat('a', '5'), 'aaaaa');
    assert.equal(repeat('b ', '5'), 'b b b b b ');
    assert.equal(repeat('a ', '5'), 'a a a a a ');
    assert.equal(repeat('c ', '5'), 'c c c c c ');
    assert.equal(repeat('a ', '5'), 'a a a a a ');
    assert.equal(repeat('b ', '5'), 'b b b b b ');
  });

  it('should throw an error when no string is given:', function() {
    assert.throws(function() {repeat(10); }, /expected a string/);
    assert.throws(function() {repeat(null); }, /expected a string/);
  });
});
