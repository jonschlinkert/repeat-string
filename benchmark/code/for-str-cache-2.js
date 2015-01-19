'use strict';

module.exports = repeat;

var res = '';
var cache;

function repeat(str, num) {
  cache = cache || str;
  if (cache !== str) {
    res = '';
    cache = str;
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
