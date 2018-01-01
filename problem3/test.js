'use strict';

const assert = require('chai').assert;

const { isPrime, isFactor, getLargestPrimeFactor } = require('./problem');

describe('isPrime()', function() {
    it('identifies 2 as prime', function() {
        assert.isTrue(isPrime(2));
    });

    it('does not identify 1 as prime', function() {
        assert.isFalse(isPrime(1));
    });

    it('is not confused by composite odd numbers', function() {
        assert.isFalse(isPrime(9));
    });
});

describe('isFactor()', function() {
    it('identifies factors', function() {
        assert.isTrue(isFactor(3, 9));
    });

    it('identifies non-factors', function() {
        assert.isFalse(isFactor(2, 9));
    });
});

describe('getLargestPrimeFactor()', function() {
    it('returns 0 if no prime factor is found', function() {
        assert.equal(getLargestPrimeFactor(1), 0);
    });

    it('returns a prime factor', function() {
        assert.equal(getLargestPrimeFactor(6), 3);
    });
});
