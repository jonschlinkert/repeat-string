'use strict';

module.exports = function repeat(str, count) {
  var res = '';

  while (count > 0) {
    if (count & 1) {
      res += str;
    }
    count >>= 1;
    str += str;
  }

  return res;
};
