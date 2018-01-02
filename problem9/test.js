'use strict';

const assert = require('chai').assert;

const {
    isPythagoreanTriple,
    getTripleWithSum,
    getProductOfTripleWithSum
} = require('./problem');

describe('isPythagoreanTriple', function() {
    it('identifies a triple', function() {
        assert.isTrue(isPythagoreanTriple(3, 4, 5));
    });

    it('identifies non triples', function() {
        assert.isFalse(isPythagoreanTriple(1, 2, 3));
    });
});

describe('getTripleWithSum', function() {
    it('returns a valid triple', function() {
        const triple = getTripleWithSum(12);
        assert.deepEqual(triple, { a: 3, b: 4, c: 5 });
    });

    it('throws an exception if no triple is found', function() {
        assert.throws(() => getTripleWithSum(5));
    });
});

describe('getProductOfTripleWithSum', function() {
    it('finds the valid product', function() {
        const product = getProductOfTripleWithSum(12);
        assert.equal(product, 60);
    });
});
