'use strict';

exports.isPalindrome = (text) => {
  if (!text) {
    throw new TypeError('empty input');
  }
  if (text.match(/[^a-z]/i)) {
    throw new TypeError('non-alphabetic input');
  }

  return text === text.split('').reverse().join('');
};
