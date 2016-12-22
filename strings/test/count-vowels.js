'use strict';

var expect = require('chai').expect;
var countVowels = require('../count-vowels').countVowels;

describe('Vowel counter', ()=>{
	it('handles empty input', ()=>{
		expect(countVowels('')).to.be.empty;
	});
	it('counts vowels in single word', ()=>{
		expect(countVowels('hello')).to.be.deep.equal({'e':1, 'o':1});
	});
	it('handles multiple vowels in sequence', ()=>{
		expect(countVowels('sauce')).to.be.deep.equal({'a':1, 'e':1, 'u':1});
	});
	it('counts vowels in single alpha-numeric word', ()=>{
		expect(countVowels('AwesomeSauce12')).to.be.deep.equal({'e':3, 'o':1, 'a':2, 'u':1});
	});
	it('counts vowels in a sentence with punctuation', ()=>{
		expect(countVowels('Hello, World!')).to.be.deep.equal({'e':1, 'o':2});
	});
});
