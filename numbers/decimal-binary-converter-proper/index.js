'use strict';

exports.dec2bin = (decimal)=>{
	if (decimal !== parseInt(decimal))
		return undefined;

	// Coerse into unsigned int by logical shifting
	// http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
	return (decimal >>> 0).toString(2);
};

exports.bin2dec = (binary)=>{
	if (typeof binary !== 'string' || binary.match(/[^10]/))
		return undefined;

	// This will never produce unsigned integer results
	// I don't want to get into bit shifting magic here
	return parseInt(binary, 2);
};
