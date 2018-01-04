'use strict';

const assert = require('chai').assert;

const {
    collatz,
    collatzLength,
    longestCollatzLengthBelowX
} = require('./problem');

describe('collatz', function() {
    it('returns the starting number', function() {
        const seq = collatz(10);
        assert.equal(seq.next().value, 10);
    });

    it('terminates at 1', function() {
        const numbers = [...collatz(1)];
        assert.equal(numbers.length, 1);
    });

    it('implements the even rule', function() {
        const seq = collatz(4);
        const [, generated] = seq;
        assert.equal(generated, 2);
    });

    it('implements the odd rule', function() {
        const seq = collatz(3);
        const [, generated] = seq;
        assert.equal(generated, 10);
    });

    it('throws an exception for non-positive numbers', function() {
        const seq = collatz(0);
        assert.throws(() => seq.next());
    });
});

describe('collatzLength', function() {
    it('returns the number of terms generated to completion', function() {
        assert.equal(collatzLength(13), 10);
    });
});

describe('longestCollatzLengthBelowX', function() {
    it('identifies the longest length', function() {
        // [4]: 3
        // [3]: 8
        // [2]: 2
        // [1]: 1
        assert.deepEqual(longestCollatzLengthBelowX(5), { term: 3, length: 8 });
    });

    it('stays below x', function() {
        assert.deepEqual(longestCollatzLengthBelowX(3), { term: 2, length: 2 });
    });
});
