'use strict';

var repeating = require('repeating');

module.exports = function(str, num) {
  return repeating(num, str);
};
