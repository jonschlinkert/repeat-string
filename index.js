'use strict';

module.exports = (string, count) => {
  /* make sure we have a string */
  if (typeof string !== "string") {
    throw new Error(": argument 'string' needs to be of type String only");
  }
  /* the argument count should be an integer only */
  else if (Number.isNaN(count) || !Number.isInteger(count)) {
    throw new Error(": argument 'count' needs to be an Integer only");
  }
  /* argument count should be >= 0 */
  else if (count < 0) {
    throw new Error(": argument 'count' needs to be greater than or equal to zero");
  }
  else {
    let resultString = "";

    /* iterate */
    for (let i = 0; i < count; ++i) {
      resultString += string;
    }

    /* return the result string */
    return resultString;
  }
}
