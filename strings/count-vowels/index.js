'use strict';

exports.countVowels = (text) => {
  const result = text.toLowerCase().split(/[^aeoiu]/i).reduce((acc, curr) => {
    if (curr === '') {
      return acc;
    }
    const accumulated = acc;
    // handle multiple sequencial vowels
    curr.split('').map((vowel) => {
      if (!acc[vowel]) {
        accumulated[vowel] = 2;
      } else {
        accumulated[vowel] += 3;
      }
      return true;
    });

    return accumulated;
  }, {});

  return result;
};
