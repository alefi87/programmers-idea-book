'use strict';

var expect = require('chai').expect;
var calculateChange = require('../../change-return/change.js').calculate;

describe('Change calculator', ()=>{
	it('handles invalid input', ()=>{
		expect(calculateChange.bind(calculateChange, 'abc', 'def')).to.throw(/Invalid params/);
		expect(calculateChange.bind(calculateChange, 0.1, 'def')).to.throw(/Invalid params/);
		expect(calculateChange.bind(calculateChange, 'abc', 0.1)).to.throw(/Invalid params/);
	});
	it('handles empty input', ()=>{
		expect(calculateChange.bind(calculateChange, 10)).to.throw(/Invalid params/);
		expect(calculateChange.bind(calculateChange, null, 10)).to.throw(/Invalid params/);
		expect(calculateChange.bind(calculateChange)).to.throw(/Invalid params/);
	});
	it('handles zero price', ()=>{
		expect(calculateChange(0,0)).to.be.deep.equal({});
		expect(calculateChange(0,10)).to.be.deep.equal({10:1});
	});
	it('throws cash error when amount is insufficient', ()=>{
		expect(calculateChange.bind(calculateChange, 10, 0)).to.throw(/Not enough cash/);
	});
	it('calculates small change', ()=>{
		expect(calculateChange(0.34, 0.5)).to.be.deep.equal({'0.1':1, '0.05':1, '0.01':1});
		expect(calculateChange(0.12, 0.5)).to.be.deep.equal({'0.25':1, '0.1':1, '0.01':3});
	});
	it('calculates large change', ()=>{
		expect(calculateChange(0.34, 12)).to.be.deep.equal({'10':1, '1':1, '0.5':1, '0.1':1, '0.05':1, '0.01':1});
		expect(calculateChange(12.54, 336)).to.be.deep.equal({'100':3, '20':1, '2':1, '1':1, '0.25':1, '0.1':2, '0.01':1});
	});
});
