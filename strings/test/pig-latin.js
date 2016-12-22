'use strict';

var expect = require('chai').expect;
var pig = require('../pig-latin');

describe('Pig Latin', ()=>{
	it('handles empty input', ()=>{
		expect(pig._t('')).to.equal('');
	});
	it('handles non-alphabetical words', ()=>{
		expect(pig._t('12#')).to.equal('12#');
	});
	it('handles words with only consonants (abbreviations?)', ()=>{
		expect(pig._t('CSR')).to.equal('CSR');
	});
	it('handles a word staring on one consonant', ()=>{
		expect(pig._t('hello')).to.equal('ellohay');
	});
	it('handles a word staring on multiple consonants', ()=>{
		expect(pig._t('trash')).to.equal('ashtray');
	});
	it('handles a word staring on a vocal', ()=>{
		expect(pig._t('apple')).to.equal('appleway');
	});
	it('handles words separated by space', ()=>{
		expect(pig._t('hello world')).to.equal('ellohay orldway');
	});
	it('handles a capitalized word', ()=>{
		expect(pig._t('Hello')).to.equal('Ellohay');
	});
	it('handles a word with capitals in the middle', ()=>{
		expect(pig._t('hElLo HeLLo')).to.equal('ElLohay ELLohay');
	});
	it('handles a word with punctuation', ()=>{
		expect(pig._t('hello,')).to.equal('ellohay,');
	});
	it('handles sentences with punctuation', ()=>{
		let sentence = 'Hello, World! This should work. Does it?'
		let expected = 'Ellohay, Orldway! Isthay ouldshay orkway. Oesday itway?'
		expect(pig._t(sentence)).to.equal(expected);
	});
});
