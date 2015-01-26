'use strict';

module.exports = function repeat(str, num) {
  var arr = [];
  arr[num] = '';
  return arr.join(str);
};