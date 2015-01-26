module.exports = repeat;

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('repeat-string expects a string.');
  }

  var len = str.length;
  var max = len * num;

  if (num === 1 || len === max) return str;
  if (num === 2) return str + str;

  if (cache !== str || typeof cache === 'undefined') {
    res = cache = str;
    num--;
  }

  var rlen = res.length;
  while (max > rlen && num > 0) {
    if (num & 1) {
      res += str;
    }
    num >>= 1;
    str += str;
  }
  return res.substr(0, max);
}

/**
 * Results cache
 */

var res = '';
var cache;
