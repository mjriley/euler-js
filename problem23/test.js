'use strict';

const assert = require('chai').assert;

const {
    isAbundant,
    getAbundantNumbersBelow,
    isSumOfAbundantNumbers,
    getNonAbundantSumNumbersBelow
} = require('./problem');

describe('isAbundant', function() {
    it('identifies an abundant number', function() {
        assert.isTrue(isAbundant(12));
    });

    it('identifies a non-abundant number', function() {
        assert.isFalse(isAbundant(10));
    });
});

describe('getAbundantNumbersBelow', function() {
    it('should return a list of abundant numbers', function() {
        assert.sameMembers(getAbundantNumbersBelow(25), [12, 18, 20, 24]);
    });

    xit('should return the list in a reasonable amount of time', function() {
        const abundantNumbers = getAbundantNumbersBelow(28123);
        console.log('total number of numbers is: ', abundantNumbers.length);
    });
});

describe('isSumOfAbundantNumbers', function() {
    it('should return true for a number that is the sum of two abundant numbers', function() {
        assert.isTrue(isSumOfAbundantNumbers(24));
    });

    it('should return false for numbers that cannot be represented this way', function() {
        assert.isFalse(isSumOfAbundantNumbers(23));
    });
});

describe('getAbundantSumNumbersBelow', function() {
    it('should detect all matching numbers below the given number', function() {
        assert.notInclude(24, getNonAbundantSumNumbersBelow(50));
    });
});
