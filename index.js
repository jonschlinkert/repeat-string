module.exports = function(str, count) {
  if (count < 1) {
    return '';
  }

  var result = '';
  while (count > 0) {
    if (count & 1) {
      result += str;
    }
    count >>= 1;
    str += str;
  }
  return result;
}
