'use strict';

module.exports = function repeat(val, num) {
  var arr = [];
  while (num--) {
    arr[num] = val;
  }
  return arr.join('');
};