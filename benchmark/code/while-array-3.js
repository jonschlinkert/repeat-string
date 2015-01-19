'use strict';

module.exports = function(val, num) {
  return repeat(val, num, []).join('');
};

function repeat(val, num, arr) {
  while (num--) {
    arr[num] = val;
  }
  return arr;
}