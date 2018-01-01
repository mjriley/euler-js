'use strict';

const assert = require('chai').assert;

const {
    isPalindrome,
    getHighestXDigitPalindromeProduct
} = require('./problem');

describe('isPalindrome', function() {
    it('labels all single digit numbers as palindromes', function() {
        assert.isTrue(isPalindrome(1));
    });

    describe('two digit numbers', function() {
        it('is true when both digits match', function() {
            assert.isTrue(isPalindrome(22));
        });

        it('is not true when the digits do not match', function() {
            assert.isFalse(isPalindrome(23));
        });
    });

    describe('three digits', function() {
        it('matches the first number vs the last number', function() {
            assert.isTrue(isPalindrome(232));
        });
    });
});

describe('getHighestXDigitPalindromeProduct', function() {
    describe('two digit', function() {
        it('matches the test provided', function() {
            let answer = getHighestXDigitPalindromeProduct(2);
            assert.equal(answer, 9009);
        });
    });
});
