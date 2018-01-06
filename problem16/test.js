'use strict';

const assert = require('chai').assert;

const { sumOfDigits } = require('./problem');
const bigInt = require('big-integer');

describe('sumOfDigits', function() {
    it('handles single digits', function() {
        assert.equal(sumOfDigits(1), 1);
    });

    it('sums up multiple digits', function() {
        assert.equal(sumOfDigits(12), 3);
    });

    it('handles bigints', function() {
        const val = bigInt('100000000000000000000000000');
        assert.equal(sumOfDigits(val), 1);
    });
});
