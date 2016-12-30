'use strict';

exports.dec2bin = (decimal) => {
  if (decimal !== parseInt(decimal, 10) || decimal !== Math.abs(decimal)) {
    return undefined;
  }

  let rest = decimal;
  let result = '';
  while (rest > 1) {
    result = (rest % 2).toString().concat(result);
    rest = Math.floor(rest / 2);
  }

  return rest.toString().concat(result);
};

exports.bin2dec = (binary) => {
  if (typeof binary !== 'string' || binary.match(/[^10]/)) {
    return undefined;
  }

  const len = binary.length;
  return binary.split('').reduce((acc, val, idx) => {
    // left to right reduce, therefore value should be taken starting from right in binary string
    const calculated = (Math.pow(2, idx) * parseInt(binary[len - idx - 1], 10));
    return acc + calculated;
  }, 0);
};
