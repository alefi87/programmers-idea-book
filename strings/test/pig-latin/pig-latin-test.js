'use strict';

const expect = require('chai').expect;
const translate = require('../../pig-latin').translate;

describe('Pig Latin', () => {
  it('handles empty input', () => {
    expect(translate('')).to.equal('');
  });
  it('handles non-alphabetical words', () => {
    expect(translate('12#')).to.equal('12#');
  });
  it('handles words with only consonants (abbreviations?)', () => {
    expect(translate('CSR')).to.equal('CSR');
  });
  it('handles a word staring on one consonant', () => {
    expect(translate('hello')).to.equal('ellohay');
  });
  it('handles a word staring on multiple consonants', () => {
    expect(translate('trash')).to.equal('ashtray');
  });
  it('handles a word staring on a vocal', () => {
    expect(translate('apple')).to.equal('appleway');
  });
  it('handles words separated by space', () => {
    expect(translate('hello world')).to.equal('ellohay orldway');
  });
  it('handles a capitalized word', () => {
    expect(translate('Hello')).to.equal('Ellohay');
  });
  it('handles a word with capitals in the middle', () => {
    expect(translate('hElLo HeLLo')).to.equal('ElLohay ELLohay');
  });
  it('handles a word with punctuation', () => {
    expect(translate('hello,')).to.equal('ellohay,');
  });
  it('handles sentences with punctuation', () => {
    const sentence = 'Hello, World! This should work. Does it?'
    const expected = 'Ellohay, Orldway! Isthay ouldshay orkway. Oesday itway?'
    expect(translate(sentence)).to.equal(expected);
  });
});
