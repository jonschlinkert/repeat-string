'use resict';

// var chalk = require('chalk');
// var path = require('path');
// var glob = require('glob');

// glob.sync(__dirname + '/code/*.js').forEach(function(fp) {
//   var pad = require(path.resolve(__dirname, 'code', fp));
//   console.log(pad('1', 3));
// });

function repeat(str, num) {
  var max = str.length * num;
  num = Math.ceil(Math.sqrt(num));

  while (num--) {
    str += str;
  }

  return str.slice(0, max);
}

console.log(repeat('foo', 6))