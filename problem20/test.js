'use strict';

const assert = require('chai').assert;
const bigInt = require('big-integer');

const { sumOfDigits, factorial } = require('./problem');

describe('sumOfDigits', function() {
    it('handles a single digit number', function() {
        assert.equal(sumOfDigits(9), 9);
    });

    it('sums two digits', function() {
        assert.equal(sumOfDigits(42), 6);
    });
});

describe('factorial', function() {
    it('handles big ints', function() {
        assert.equal(factorial(bigInt(1)), 1);
    });

    it('multiplies the terms', function() {
        assert.equal(factorial(bigInt(3)), 6);
    });
});
