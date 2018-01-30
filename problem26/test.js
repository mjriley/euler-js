'use strict';

const assert = require('chai').assert;

const {
    getCycleLength,
    getQuotientAndRemainder,
    getLongestSequenceBelowX
} = require('./problem');

describe('getCycleLength', function() {
    it('returns 0 if the number divides evenly', function() {
        assert.equal(getCycleLength(2), 0);
    });

    it('detects a cycle length of 1', function() {
        assert.equal(getCycleLength(3), 1);
    });

    it('detects a higher cycle length', function() {
        assert.equal(getCycleLength(7), 6);
    });
});

describe('getQuotientAndRemainder', function() {
    it('returns the correct quotient and remainder when division is clean', function() {
        const { quotient, remainder } = getQuotientAndRemainder(10, 2);
        assert.equal(quotient, 5);
        assert.equal(remainder, 0);
    });

    it('handles the remainder when the division is not clean', function() {
        const { quotient, remainder } = getQuotientAndRemainder(10, 3);
        assert.equal(quotient, 3);
        assert.equal(remainder, 1);
    });
});

describe('getLongestSequenceBelowX', function() {
    it('should not include the upper bound', function() {
        assert.equal(getLongestSequenceBelowX(7), 3);
    });

    it('detects the largest sequence below 10', function() {
        assert.equal(getLongestSequenceBelowX(10), 7);
    });
});
