'use strict';

var expect = require('chai').expect;
var isPalindrome = require('../../palindrome').isPalindrome;

describe('Palindrome', ()=>{
	it('throws TypeError when input is empty', ()=>{
		expect(isPalindrome.bind(isPalindrome, '')).to.throw(/empty input/);
	});
	it('throws TypeError when input contains anything but alphabetic characters', ()=>{
		expect(isPalindrome.bind(isPalindrome, 'r4c3c4r')).to.throw(/non-alphabetic/);
		expect(isPalindrome.bind(isPalindrome, 'racercar is awesome')).to.throw(/non-alphabetic/);
	});
	it('identifies a palindrome', ()=>{
		expect(isPalindrome('racecar')).to.be.true;
	});
	it('identifies non-palindromes', ()=>{
		expect(isPalindrome('racer')).to.be.false;
	});
});
