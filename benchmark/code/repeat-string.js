'use strict';

var res = '';
var cache;

module.exports = function repeat(str, num) {
  var len = str.length;
  var max = len * num;

  cache = cache || str;
  if (cache !== str) {
    res = '';
    cache = str;
  } else if (len > max) {
    num = 0;
  }

  while (num > 0 && max > res.length) {
    if (num & 1) {
      res += str;
    }

    if (max <= res.length) {
      return res.substr(0, max);
    }

    num >>= 1;
    str += str;
  }

  return res.substr(0, max);
};
