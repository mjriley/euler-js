'use strict';

const assert = require('chai').assert;

const {
    evaluateQuadradic,
    getConsecutivePrimes,
    getConsecutivePrimeCoefficients
} = require('./problem');

describe('evaluateQuadradic', function() {
    it('evaluates the quadradic correctly', function() {
        assert.equal(evaluateQuadradic(-79, 1601, 2), 1447);
    });
});

describe('getConsecutivePrimes', function() {
    it('matches the example', function() {
        assert.equal(getConsecutivePrimes(-79, 1601), 80);
    });
});

describe('consecutivePrimeCoefficients', function() {
    it('returns a reasonable number', function() {
        const { a, b, numConsecutive } = getConsecutivePrimeCoefficients(10);
        assert.equal(numConsecutive, 6);
    });
});
