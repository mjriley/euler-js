'use strict';

const assert = require('chai').assert;
const _ = require('lodash');

const {
    isPrime,
    factorizeIntoPrimes,
    findLowestPrimeFactor,
    combineLists,
    smallestNumberDivisibleBy
} = require('./problem');

describe('isPrime', function() {
    it('does not identify 1 as prime', function() {
        assert.isFalse(isPrime(1));
    });

    it('identifies 2 as prime', function() {
        assert.isTrue(isPrime(2));
    });

    it('does not identify a composite number as prime', function() {
        assert.isFalse(isPrime(6));
    });
});

describe('findLowestPrimeFactor', function() {
    it('throws an exception if no prime factor can be found', function() {
        assert.throws(() => findLowestPrimeFactor(2));
    });

    it('finds the lowest prime', function() {
        assert.equal(findLowestPrimeFactor(6), 2);
    });
});

describe('factorizeIntoPrimes', function() {
    it('does nothing to a number that is already prime', function() {
        assert.sameMembers(factorizeIntoPrimes(2), [2]);
    });

    it('handles composite numbers', function() {
        assert.sameMembers(factorizeIntoPrimes(6), [2, 3]);
    });

    it('handles duplicates', function() {
        assert.sameOrderedMembers(factorizeIntoPrimes(9), [3, 3]);
    });
});

describe('combineLists', function() {
    it('adds the members to an empty list', function() {
        assert.sameMembers(combineLists([], [1, 2]), [1, 2]);
    });

    it('combines two distinct lists', function() {
        assert.sameMembers(combineLists([1, 3], [2, 4]), [1, 2, 3, 4]);
    });

    it('accounts for multiples', function() {
        assert.sameMembers(combineLists([1, 2], [2, 2]), [1, 2, 2]);
    });
});

describe('smallestNumberDivisibleBy()', function() {
    it('matches the example', function() {
        const answer = smallestNumberDivisibleBy(_.range(1, 11));
        assert.equal(answer, 2520);
    });
});
