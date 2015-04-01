/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var repeat = require('./');

describe('repeat', function () {
  it('should return an empty string when a number is not given:', function () {
    repeat('a').should.equal('');
  });

  it('should return an empty string when zero or null is given as the number:', function () {
    repeat('', 0).should.equal('');
    repeat('a', 0).should.equal('');
    repeat('', null).should.equal('');
    repeat('a', null).should.equal('');
  });

  it('should repeat the given string n times', function () {
    repeat(' ', 0).should.equal('');
    repeat('a', 0).should.equal('');
    repeat('a', 1).should.equal('a');
    repeat('a', 2).should.equal('aa');
    repeat('a', 3).should.equal('aaa');
    repeat('   ', 3).should.equal('         ');
    repeat('a ', 3).should.equal('a a a ');
    repeat('a', 10).should.equal('aaaaaaaaaa');
    repeat('b ', 10).should.equal('b b b b b b b b b b ');
    repeat('a ', 10).should.equal('a a a a a a a a a a ');
    repeat('abc ', 25).should.equal('abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc ');
  });

  it('should allow the multiplier to be a string:', function () {
    repeat('a', '0').should.equal('');
    repeat('a', '1').should.equal('a');
    repeat('a', '2').should.equal('aa');
    repeat('a', '10').should.equal('aaaaaaaaaa');
    repeat('b ', '10').should.equal('b b b b b b b b b b ');
    repeat('a ', '10').should.equal('a a a a a a a a a a ');
  });

  it('should cache strings until the string changes:', function () {
    repeat('a', '5').should.equal('aaaaa');
    repeat('b ', '5').should.equal('b b b b b ');
    repeat('a ', '5').should.equal('a a a a a ');
    repeat('c ', '5').should.equal('c c c c c ');
    repeat('a ', '5').should.equal('a a a a a ');
    repeat('b ', '5').should.equal('b b b b b ');
  });

  it('should throw an error when no string is given:', function () {
    (function() {repeat(10); }).should.throw('repeat-string expects a string.');
    (function() {repeat(null); }).should.throw('repeat-string expects a string.');
  });
});
