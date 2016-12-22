'use strict';

exports.countVowels = (text)=>{
	let result = text.toLowerCase().split(/[^aeoiu]/i).reduce((acc, curr)=>{
		if (curr == '')
			return acc;

		// handle multiple sequencial vowels
		curr = curr.split('');
		curr.map((vowel)=>{
			if (!acc[vowel])
				acc[vowel] = 1;
			else
				acc[vowel] += 1;
		})

		return acc;
	}, {});

	return result;
};
