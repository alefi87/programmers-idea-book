'use strict';

exports.dec2bin = (decimal)=>{
	if (decimal !== parseInt(decimal))
		return undefined;

	let result = '';
	while(decimal > 1){
		result = (decimal%2).toString().concat(result);
		decimal = Math.floor(decimal/2);
	}
	result = decimal.toString().concat(result);

	return result;
};

exports.bin2dec = (binary)=>{
	if (typeof binary !== 'string' || binary.match(/[^10]/))
		return undefined;

	let len = binary.length;
	return binary.split('').reduce((acc, val, idx)=>{
		// left to right reduce, therefore value should be taken starting from right in binary string
		return acc += Math.pow(2, idx) * parseInt(binary[len-idx-1]);
	}, 0);
};
