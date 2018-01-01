'use strict';

let assert = require('chai').assert;

let {
    generateFibNotExceedingX,
    getNextFib,
    getEvenFibNotExceedingX,
    getSumOfEvenFibNotExceedingX
} = require('./problem');

describe('getNextFib', function() {
    it('should start with 1', function() {
        assert.equal(getNextFib(), 1);
    });

    it('should use 2 as the second term', function() {
        assert.equal(getNextFib(1), 2);
    });

    it('should sum the previous terms', function() {
        assert.equal(getNextFib(1, 2), 3);
    });
});

describe('generateFibBelowX()', function() {
    it('should start with the empty set', function() {
        assert.sameOrderedMembers(generateFibNotExceedingX(0), []);
    });

    it('should start with 1', function() {
        assert.sameOrderedMembers(generateFibNotExceedingX(1), [1]);
    });

    it('should start with 1 and 2', function() {
        assert.sameOrderedMembers(generateFibNotExceedingX(2), [1, 2]);
    });

    it('should include the boundary', function() {
        assert.sameOrderedMembers(generateFibNotExceedingX(1), [1]);
    });

    it('should generate each term as the sum of the previous two terms', function() {
        assert.sameOrderedMembers(generateFibNotExceedingX(4), [1, 2, 3]);
    });
});

describe('getEvenFibBelowX', function() {
    it('should only contain even numbers', function() {
        let numbers = getEvenFibNotExceedingX(10);
        assert.sameOrderedMembers(numbers, [2, 8]);
    });
});

describe('getSumOfEvenFibBelowX', function() {
    it('should sum the sequence', function() {
        let sum = getSumOfEvenFibNotExceedingX(10); // [2, 8]
        assert.equal(sum, 10);
    });
});
