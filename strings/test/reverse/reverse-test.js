'use strict';

var expect = require('chai').expect;
var reverse = require('../../reverse').reverse;

describe('Reverse', ()=>{
	it('handles empty input', ()=>{
		expect(reverse('')).to.equal('');
	});
	it('reverses a string', ()=>{
		expect(reverse('hello')).to.equal('olleh');
	});
	it('handles multiple words and capital letters', ()=>{
		expect(reverse('Hello World')).to.equal('dlroW olleH');
	});
	it('reverses strange chars and numbers', ()=>{
		expect(reverse('hello $€#&%3')).to.equal('3%&#€$ olleh');
	});
});
