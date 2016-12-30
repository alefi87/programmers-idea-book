'use strict';

const prompt = require('prompt');
const Promise = require('bluebird');
const calculateChange = require('./change').calculate;
const _ = require('lodash');

const prices = {
  'Chocolate Bar': 1.23,
  Candy: 0.07,
  Drink: 1.99,
};
const items = _.keys(prices);
const width = 20;
const itemProps = [
  {
    name: 'item',
    validator: /^[0-9]+$/,
    warning: 'Input must be numeric',
  },
];
const amountProps = [
  {
    name: 'amount',
    validator: /^[0-9.]+$/,
    warning: 'Input must be a float',
  },
];

for (let i = 0; i < items.length; i++) {
  console.log(`${i + 1}. ${items[i]}${(' '.repeat(width - items[i].length))}${prices[items[i]]}`);
}

const onError = function onError(err) {
  console.log(err.message);
  process.exit();
};

let price = -1;
Promise.promisifyAll(prompt);
prompt.start();
prompt.getAsync(itemProps).then((response) => {
  if (response.item > items.length || response.item < 1) {
    onError(new Error('Chosen item does not exist.'));
  }
  price = prices[items[response.item - 1]];
  return prompt.getAsync(amountProps);
}).then((response) => {
  const change = calculateChange(price, parseFloat(response.amount));
  console.log(`Your change: ${JSON.stringify(change)}`);
});
