'use strict';

const assert = require('chai').assert;

const wu = require('wu');

const {
    isFactor,
    triangleNumbers,
    numberOfDivisors,
    firstTriangleNumberWithMoreThanXDivisors
} = require('./problem');

describe('isFactor()', function() {
    it('considers 1 as a factor', function() {
        assert.isTrue(isFactor(5, 1));
    });

    it('identifies non-factors', function() {
        assert.isFalse(isFactor(5, 2));
    });

    it('correctly identifies that a number divides itself', function() {
        assert.isTrue(isFactor(5, 5));
    });
});

describe('triangleNumbers', function() {
    it('starts the sequence off at 1', function() {
        let gen = triangleNumbers();
        assert.equal(gen.next().value, 1);
    });

    it('continues to generate the next numbers', function() {
        let gen = triangleNumbers();
        let a, b;
        [a, b] = gen;
        assert.sameOrderedMembers([a, b], [1, 3]);
    });

    it('the fifth term is 15', function() {
        let gen = wu(triangleNumbers());
        let value = gen.drop(4).next().value;
        assert.equal(value, 15);
    });
});

describe('numberOfDivisors', function() {
    it('returns a single divisor for 1', function() {
        assert.equal(numberOfDivisors(1), 1);
    });

    it('counts both 1 and itself for prime numbers', function() {
        assert.equal(numberOfDivisors(7), 2);
    });

    it('finds all factors', function() {
        assert.equal(numberOfDivisors(4), 3); // 1, 2, 4
    });
});

describe('firstTriangleNumberWithMoreThanXDivisors', function() {
    it('passes the provided example', function() {
        assert.equal(firstTriangleNumberWithMoreThanXDivisors(5), 28);
    });
});
