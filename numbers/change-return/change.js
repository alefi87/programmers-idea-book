'use strict';

const denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05];

exports.calculate = (price, amount) => {
  if (price !== parseFloat(price) || amount !== parseFloat(amount)) {
    throw (new TypeError('Invalid params'));
  }
  if (amount < price) {
    throw (new TypeError('Not enough cash'));
  }

  let rest = amount - price;
  const change = {};
  for (let i = 0; i < denominations.length; i++) {
    const multiplier = Math.floor(rest / denominations[i]);
    if (multiplier > 0) {
      change[denominations[i]] = multiplier;
      rest %= denominations[i];
    }
  }
  if (rest > 0) {
    change['0.01'] = Math.round(rest / 0.01);
  }
  return change;
};
