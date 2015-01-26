'use strict';

module.exports = repeat;

function repeat(str, num) {
  var res = '';

  while (num > 0) {
    if (num & 1) {
      res += str;
    }
    num >>>= 1;
    if (!num) return res;
    str += str;
  }
  return res;
}