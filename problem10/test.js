'use strict';

const assert = require('chai').assert;

const { getPrimesBelowX, sumOfPrimesBelowX } = require('./problem');

describe('getPrimesBelowX', function() {
    it('should not include x', function() {
        const answer = getPrimesBelowX(5);
        assert.sameOrderedMembers([...answer], [2, 3]);
    });
});

describe('sumOfPrimesBelowX', function() {
    it('should match the example', function() {
        const answer = sumOfPrimesBelowX(10);
        assert.equal(answer, 17);
    });
});
