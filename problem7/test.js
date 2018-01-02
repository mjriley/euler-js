'use strict';

const assert = require('chai').assert;

const { getNextPrime, getNthPrime } = require('./problem');

describe('getNextPrime()', function() {
    it('starts at 2', function() {
        assert.equal(getNextPrime(0), 2);
    });

    it('generates the next prime after the provided base', function() {
        assert.equal(getNextPrime(2), 3);
    });
});

describe('getNthPrime()', function() {
    it('matches the test case', function() {
        assert.equal(getNthPrime(6), 13);
    });
});
