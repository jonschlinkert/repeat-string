/**
 * Pad a number with leading zeros to "pad" places:
 *
 * @param number: The number to pad
 * @param pad: The maximum number of leading zeros
 */



// http://jsperf.com/ways-to-0-pad-a-number/19
function padNumberLoop(val, amount) {
  var res = '' + val;

  while (res.length < amount) {
    res = '0' + res;
  }
  return res;
}

// padStr is the zero-pad string, e.g.: "0000"
// http://jsperf.com/ways-to-0-pad-a-number/19
function padNumberString(number, padStr) {
  var len = padStr.length;
  number = number.toString();
  return number.length >= len ? number : (padStr + number).slice(-len);
}



function pad(number, amount) {
  var res = '' + number;
  var len = res.length;
  while (len < amount) {
    res.unshift(0);
  }
  return res.join('');
}

function pad(number, amount) {
  var res = '' + number;
  var len = res.length;
  var str = '';

  while (len < amount) {
    str += '0';
  }
  return str + res;
}

function pad(number, amount) {
  var res = '' + number;
  var len = res.length;

  while (len < amount) {
    res = '0' + res;
  }

  return res;
}


// http://jsperf.com/ways-to-0-pad-a-number/19
function padWhile(num, count) {
  var pad = count - (num + '').length;
  while (--pad > -1) {
    num = '0' + num;
  }
  return num;
};

// http://jsperf.com/ways-to-0-pad-a-number/19
String.prototype.padLeft = function(ch, len) {
  return this.length >= len ? this : (ch + this).padLeft(ch, len)
}

// http://twitter.com/cowboy/status/15344233981
// http://jsperf.com/pad-number/3
function pad(n, d) {
  return Array(Math.max(0, d - (n + '').length + 1)).join(0) + n;
};



// http://jsperf.com/pad-number/3
function pad4(n, d) {
  return ('00000000000000' + n).slice(-d);
}


/**
 *  http://jsperf.com/string-padding-methods
 */

String.prototype.lpad = function(padString, length) {
  var str = this;
  while (str.length < length) {
    str = padString + str;
  }
  return str;
};

String.prototype.rpad = function(padString, length) {
  var str = this;
  while (str.length < length) {
    str = str + padString;
  }
  return str;
};

function padLeft(str, padString, length) {
  while (str.length < length) {
    str = padString + str;
  }
  return str;
};

// #1 tied for fastest
function padRight(str, padString, length) {
  while (str.length < length) {
    str = str + padString;
  }
  return str;
};

// #1 tied for fastest
function padString(str, padString, length, left) {
  while (str.length < length) {
    str = left ? str + padString : padString + str;
  }
  return str;
};

function padArray(str, padString, length, left) {
  return (left ? str : '') + (new Array(length - str.length).join(padString)) + (left ? '' : str);
}


function padArrayLeft(str, padString, length) {
  return str + (new Array(length - str.length).join(padString));
};

function padArrayRight(str, padString, length) {
  return new Array(length - str.length).join(padString) + str;
};


function pad(val, len) {
  var zeros = '0000000000000000000000000000000000000000000000000000000000000000';
  return zeros.substr(0, len) + val;
}

function pad(val, amount) {
  return ('0000000000000000' + val).slice(-amount);
}