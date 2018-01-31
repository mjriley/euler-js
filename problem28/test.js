'use strict';

const assert = require('chai').assert;

const {
    diagDownSum,
    diagUpSum,
    sumOfDiagonals,
    generateSpiralOfLength,
    diagonalSpiralSum
} = require('./problem');

describe('diagDownSum', function() {
    it('should handle a 1x1 2D array', function() {
        assert.equal(diagDownSum([[1]]), 1);
    });

    it('should handle a 2x2 2D array', function() {
        assert.equal(diagDownSum([[1, 2], [3, 4]]), 5);
    });
});

describe('diagUpSum', function() {
    it('should handle a 1x1 2D array', function() {
        assert.equal(diagUpSum([[1]]), 1);
    });

    it('should handle a 2x2 2D array', function() {
        assert.equal(diagUpSum([[1, 7], [3, 4]]), 10);
    });
});

describe('sumOfDiagonals', function() {
    it('should handle a 1x1 2D array', function() {
        assert.equal(sumOfDiagonals([[1]]), 1);
    });

    it('should handle the example', function() {
        const input = [
            [21, 22, 23, 24, 25],
            [20, 7, 8, 9, 10],
            [19, 6, 1, 2, 11],
            [18, 5, 4, 3, 12],
            [17, 16, 15, 14, 13]
        ];

        assert.equal(sumOfDiagonals(input), 101);
    });
});

describe('generateSpiralOfLength', function() {
    it('should handle length 1', function() {
        assert.sameDeepOrderedMembers(generateSpiralOfLength(1), [[1]]);
    });

    it('should handle length 3', function() {
        const expected = [[7, 8, 9], [6, 1, 2], [5, 4, 3]];
        const generated = generateSpiralOfLength(3);

        assert.sameDeepOrderedMembers(generated, expected);
    });

    it('should handle length 5', function() {
        const expected = [
            [21, 22, 23, 24, 25],
            [20, 7, 8, 9, 10],
            [19, 6, 1, 2, 11],
            [18, 5, 4, 3, 12],
            [17, 16, 15, 14, 13]
        ];

        assert.sameDeepOrderedMembers(generateSpiralOfLength(5), expected);
    });
});

describe('diagonalSpiralSum', function() {
    it('should match the example', function() {
        assert.equal(diagonalSpiralSum(5), 101);
    });
});
