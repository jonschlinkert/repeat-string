var zeros = '0000000000000000';

// ===Method 1===:
var str = 'test';
// zerosding length = zeros.length
zeros.length
//=> 16

// zeros-left
str + zeros.substr(str.length);
//=> 'test000000000000'

// zeros-left
zeros.substr(str.length) + str;
//=> '000000000000test'

// ===Method 2 AND 3===:

var str = "test";
(zeros + str).slice(-16)
//=> '000000000000test'

// equiv to:
// speed tests http://jsperf.com/zerosding6000
var str = "test";
(zeros + str).substr(-16)
//=> '000000000000test'

//zerosding right
var str = "test";
(str + zeros).substr(0, 16)
//=> 'test000000000000'

var str = "test";
(str + zeros).slice(0, 16)
//=> 'test000000000000'


var str = "test";
(str + zeros).slice(-16)
//=> '0000000000000000'

var str = "test";
(str + zeros).substr(-16)

//=> '0000000000000000'