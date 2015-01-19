'use strict';

var res = '';
var cache;

module.exports = function repeat(str, count) {
  var max = (str.length * count);
  var i = 0;

  cache = cache || str;
  if (cache !== str) {
    res = '';
    cache = str;
  }

  if (res.length >= max) {
    return res.slice(0, max);
  }

  for (; i < count; i++) {
    res += str;
    if (res.length >= max) {
      return res.slice(0, max);
    }
  }

  return res.slice(0, max);
};

