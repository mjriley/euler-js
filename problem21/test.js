'use strict';

const assert = require('chai').assert;

const {
    isDivisor,
    getDivisors,
    sumOfProperDivisors,
    isAmicable,
    getAmicableNumbersBelow
} = require('./problem');

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

describe('isAmicable', function() {
    it('does not find a non-amicable number amicable', function() {
        // sum of divisors of 4 is 3,
        // sum of divisors of 3 is 1
        assert.isFalse(isAmicable(4));
    });

    it('returns true for amicable numbers', function() {
        assert.isTrue(isAmicable(220));
        assert.isTrue(isAmicable(284));
    });

    it('ensures that the number and its pair are different', function() {
        // sum of divisors of 6 is 6
        assert.isFalse(isAmicable(6));
    });

    it('does not consider 1 an amicable number', function() {
        assert.isFalse(isAmicable(1));
    });
});

describe('getAmicableNumbersBelow', function() {
    it('does not include 1', function() {
        const numbers = getAmicableNumbersBelow(10);
        assert.notInclude(numbers, 1);
    });

    it('does not include the ceiling', function() {
        const tooLow = getAmicableNumbersBelow(220);
        assert.notInclude(tooLow, 220);

        const justRight = getAmicableNumbersBelow(221);
        assert.include(justRight, 220);
    });
});
