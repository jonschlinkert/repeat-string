'use strict';

module.exports = function repeat(val, num) {
  var arr = [];
  var i = 0;

  while (num--) {
    arr[i++] = val;
  }
  return arr.join('');
};