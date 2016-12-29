'use strict';

var expect = require('chai').expect;
var toBinary = require('../../decimal-binary-converter-proper').dec2bin;
var toDecimal = require('../../decimal-binary-converter-proper').bin2dec;

describe('Proper Binary-Decimal Converter', ()=>{
	it('handles invalid input', ()=>{
		expect(toBinary()).to.not.exist;
		expect(toBinary('string')).to.not.exist;
		expect(toDecimal()).to.not.exist;
		expect(toDecimal('string')).to.not.exist;
		expect(toDecimal('112001')).to.not.exist;
	});
	it('converts to binary', ()=>{
		expect(toBinary(-16)).to.be.equal('11111111111111111111111111110000');
		expect(toBinary(4)).to.be.equal('100');
		expect(toBinary(7)).to.be.equal('111');
		expect(toBinary(131261)).to.be.equal('100000000010111101');
	});
	it('converts to decimal', ()=>{
		expect(toDecimal('100')).to.be.equal(4);
		expect(toDecimal('100000000010111101')).to.be.equal(131261);
	});
});
