'use strict';

exports.toBinary = (decimal)=>{
	if (decimal !== parseInt(decimal))
		return undefined;

	let result = '';
	while(decimal > 1){
		result += (decimal%2).toString();
		decimal = Math.floor(decimal/2);
	}
	result += decimal.toString();
	result = result.split('').reverse().join('');

	return result;
};

exports.toDecimal = (binary)=>{
	if (typeof binary !== 'string' || binary.match(/[^10]/))
		return undefined;

	let result = 0;
	binary = binary.split('');
	let len = binary.length;
	for(let i=0; i < len; i++){
		result += Math.pow(2, i) * parseInt(binary[len-i-1]);
	}

	return result;
};
