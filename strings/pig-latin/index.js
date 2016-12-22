'use strict';

function latinate(word) {
	// empty input
	if (word.length === 0)
		return '';
	// does not contain any alphanumeric chars
	if (!word.match(/[a-z0-9]/i))
		return word;
	// does not contain a letter (only numeric after previous check)
	if (!word.match(/[a-z]/i))
		return word;
	// only consonants should be left unhandled
	if (!word.match(/[aeoiu]/i))
		return word;

	let firstChar = word.substring(0,1);
	let isCapitalized = firstChar && firstChar == firstChar.toUpperCase();
	let consonants = word.split(/[aoeiu]/i)[0];
	let result = '';

	if (consonants.length > 0) {
		result = word.substring(consonants.length, word.length) + consonants.toLowerCase() + 'ay';
	} else {
		result = word + 'way';
	}

	if (isCapitalized) {
		result = result.substr(0,1).toUpperCase() + result.substr(1);
	}
	return result;
};

exports._t = (text)=>{
	var words = text.split(/\b/);
	//console.log(words);
	var latinatedWords = words.map((word)=>latinate(word));
	return latinatedWords.join('');
};
