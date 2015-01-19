'use strict';

module.exports = function repeat(val, amount) {
  var res = [];

  while (amount--) {
    res.unshift(val);
  }

  return res.join('');
};
