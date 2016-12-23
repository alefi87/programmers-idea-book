'use strict';

var prompt = require('prompt');
var change = require('./change');
var _ = require('lodash');
var prices = {
	'Chocolate Bar': 1.23,
	'Candy': 0.07,
	'Drink': 1.99
};
var items=_.keys(prices);
var width = 20;
var item_props = [
	{
		name: 'item',
		validator: /^[0-9]+$/,
		warning: 'Input must be numeric'
	}
];
var amount_props = [
	{
		name: 'amount',
		validator: /^[0-9\.]+$/,
		warning: 'Input must be a float'
	}
];

for (let i=0; i<items.length; i++) {
	console.log((i+1) + ". " + items[i] + (" ".repeat(width-items[i].length)) + prices[items[i]]);
}

prompt.start();
prompt.get(item_props, (err, res)=>{
	if (err)
		return onError(err);
	if (res.item > items.length || res.item < 1)
		return onError(new Error('Chosen item does not exist.'));

	var price = prices[items[res.item-1]];
	prompt.get(amount_props, (err, res)=>{
		if (err)
			return onError(err);

		console.log('Your change: ' + change.calculate(price, res.amount));
	});
});

function onError(err) {
	console.log(err.message);
	return 1;
};
