'use strict';

function latinate(word) {
  // empty input
  if (word.length === 0) { return ''; }
  // does not contain any alphanumeric chars
  if (!word.match(/[a-z0-9]/i)) { return word; }
  // does not contain a letter (only numeric after previous check)
  if (!word.match(/[a-z]/i)) { return word; }
  // only consonants should be left unhandled
  if (!word.match(/[aeoiu]/i)) { return word; }

  const firstChar = word.substring(0, 1);
  const isCapitalized = firstChar && firstChar === firstChar.toUpperCase();
  const consonants = word.split(/[aoeiu]/i)[0];
  let result = '';

  if (consonants.length > 0) {
    const wordWithoutLeadConsonants = word.substring(consonants.length, word.length);
    result = `${wordWithoutLeadConsonants}${consonants.toLowerCase()}ay`;
  } else {
    result = `${word}way`;
  }

  if (isCapitalized) {
    result = result.substr(0, 1).toUpperCase() + result.substr(1);
  }
  return result;
}

exports.translate = (text) => {
  const words = text.split(/\b/);
  const latinatedWords = words.map(word => latinate(word));
  return latinatedWords.join('');
};
