'use strict';
const assert = require('chai').assert;
const { isDivisor, getDivisors, sumOfProperDivisors } = require('./divisors');

describe('isDivisor', function() {
    it('considers 1 a divisor', function() {
        assert.isTrue(isDivisor(1, 20));
    });

    it('does not consider the number itself to be a divisor', function() {
        assert.isFalse(isDivisor(20, 20));
    });

    it('correctly evaluates divisors', function() {
        assert.isTrue(isDivisor(5, 20));
    });

    it('correctly evaluates non-divisors', function() {
        assert.isFalse(isDivisor(7, 20));
    });
});

describe('getDivisors', function() {
    it('does not find any divisors for 1', function() {
        const divisors = getDivisors(1);
        assert.isEmpty(divisors);
    });

    it('finds all divisors for a number', function() {
        const divisors = getDivisors(4);
        assert.sameMembers(divisors, [1, 2]);
    });
});

describe('sumOfProperDivisors', function() {
    it('returns the sum of the found divisors', function() {
        assert.equal(sumOfProperDivisors(4), 3);
    });

    it('handles the example', function() {
        assert.equal(sumOfProperDivisors(220), 284);
        assert.equal(sumOfProperDivisors(284), 220);
    });
});
