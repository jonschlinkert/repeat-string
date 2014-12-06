/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('repeat-string expects a string.');
  }

  var res = '';

  while (num) {
    if (num & 1) {
      res += str;
    }
    num >>= 1;
    str += str;
  }

  return res;
};
