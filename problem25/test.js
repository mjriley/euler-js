'use strict';

const assert = require('chai').assert;

const bigInt = require('big-integer');

const { hasNDigits, fib, getFirstIndexWhere } = require('./problem');

describe('bigInt lenth', function() {
    it("gives us access to a number's length", function() {
        const num = bigInt(1000000);
        assert.equal(num.toString().length, 7);
    });
});

describe('hasNDigits', function() {
    it('returns true when the number of digits match', function() {
        assert.isTrue(hasNDigits(bigInt(1000000), 7));
    });

    it('returns false when the number of digits do not match', function() {
        assert.isFalse(hasNDigits(bigInt(1000000), 6));
    });
});

describe('fib', function() {
    it('generates the first element', function() {
        const seq = fib();
        assert.isTrue(seq.next().value.equals(bigInt(1)));
    });

    it('generates the first two elements', function() {
        const seq = fib();
        assert.sameOrderedMembers(
            [seq.next().value.toString(), seq.next().value.toString()],
            ['1', '1']
        );
    });

    it('generates the first three elements', function() {
        const seq = fib();
        assert.sameOrderedMembers(
            [
                seq.next().value.toString(),
                seq.next().value.toString(),
                seq.next().value.toString()
            ],
            ['1', '1', '2']
        );
    });

    it('generates the correct 12th element', function() {
        const seq = fib();
        let element;
        for (let i = 0; i < 12; ++i) {
            element = seq.next();
        }

        assert.isTrue(element.value.equals(bigInt(144)));
    });
});

describe('getFirstIndexWhere', function() {
    it('returns the correct index', function() {
        const seq = fib();
        const index = getFirstIndexWhere(seq, ele => ele > 5);
        assert.equal(index, 6);
    });

    it('returns the first index with 3 digits', function() {
        const seq = fib();
        const index = getFirstIndexWhere(seq, ele => hasNDigits(ele, 3));
        assert.equal(index, 12);
    });
});
