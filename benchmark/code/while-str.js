'use strict';

module.exports = function repeat(val, amount) {
  var str = '';
  while (amount--) {
    str += val;
  }
  return str;
};