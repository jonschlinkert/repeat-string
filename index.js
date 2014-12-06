/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('repeat-string expects a string.');
  }

  cache = cache || str;
  if (cache !== str) {
    res = '';
  }

  var max = (str.length * num);
  var i = 0;

  if (res.length >= max) {
    return res.slice(0, max);
  }

  for (; num > 0; i++) {
    if (num & 1) {
      res += str;
    }

    if (res.length >= max) {
      return res.slice(0, max);
    }

    num >>= 1;
    str += str;
  }

  return res.slice(0, max);
}
