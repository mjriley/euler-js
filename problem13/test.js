'use strict';

const assert = require('chai').assert;

const { getFirstXDigits, digitAddition, reverseString } = require('./problem');

describe('reverseString', function() {
    it('does nothing to a length 1 string', function() {
        assert.equal(reverseString('i'), 'i');
    });

    it('reverses two characters', function() {
        assert.equal(reverseString('ab'), 'ba');
    });

    it('handles odd lengths', function() {
        assert.equal(reverseString('abc'), 'cba');
    });
});

describe('getFirstXDigits', function() {
    it('returns the entire number if it doesnt contain enough digits', function() {
        assert.equal(getFirstXDigits('12', 3), 12);
    });

    it('returns the leading digits if there are more than the requested digits', function() {
        assert.equal(getFirstXDigits('12', 1), 1);
    });

    it('handles requesting exactly the number of digits available', function() {
        assert.equal(getFirstXDigits('12', 2), 12);
    });
});

describe('digitAddition', function() {
    it('handles basic addition', function() {
        assert.equal(digitAddition('1', '2'), '3');
    });

    it('handles multiple digits', function() {
        assert.equal(digitAddition('11', '22'), '33');
    });

    it('handles really large numbers', function() {
        const augend = '11111111111111111111111111111111111111111111111111';
        const addend = '22222222222222222222222222222222222222222222222222';
        const expected = '33333333333333333333333333333333333333333333333333';

        assert.equal(digitAddition(augend, addend), expected);
    });

    it('handles carrying-over', function() {
        assert.equal(digitAddition('66', '66'), '132');
    });

    it('handles digits of different length', function() {
        assert.equal(digitAddition('2', '14'), '16');
    });
});
