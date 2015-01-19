'use strict';

var res = '';
var cache;

module.exports = function repeat(str, num) {
  var max = str.length * num;

  cache = cache || str;
  if (cache !== str) {
    res = '';
    cache = str;
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
