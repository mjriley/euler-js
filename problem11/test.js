'use strict';

const assert = require('chai').assert;

const {
    greatestXDigitProduct,
    createHorizontalSequences,
    createVerticalSequences,
    createDiagonalDownSequences,
    createDiagonalUpSequences,
    findGreatestXProduct
} = require('./problem');

describe('greatestXDigitProduct', function() {
    it('multiplies the terms together when the sequence is the minimum length', function() {
        const sequence = [2, 3];
        assert.equal(greatestXDigitProduct(sequence, 2), 6);
    });

    it('searches for a product of exactly the number of digits specified', function() {
        const sequence = [2, 3, 4];
        assert.equal(greatestXDigitProduct(sequence, 2), 12);
    });

    it('can find the greatest sequence in the middle', function() {
        const sequence = [1, 2, 3, 1];
        assert.equal(greatestXDigitProduct(sequence, 2), 6);
    });
});

describe('createHorizontalSequences', function() {
    it('does not mutute the original array', function() {
        const grid = [[1, 2], [3, 4]];
        const sequences = createHorizontalSequences(grid);
        assert.sameOrderedMembers(sequences[0], [1, 2]);
        assert.sameOrderedMembers(sequences[1], [3, 4]);
    });
});

describe('createVerticalSequences', function() {
    it('returns vertical sequences', function() {
        const grid = [[1, 2], [3, 4]];
        const sequences = createVerticalSequences(grid);
        assert.sameOrderedMembers(sequences[0], [1, 3]);
        assert.sameOrderedMembers(sequences[1], [2, 4]);
    });
});

describe('createDiagonalDownSequences', function() {
    it('returns the diagonal sequences', function() {
        const grid = [[1, 2], [3, 4]];
        const sequences = createDiagonalDownSequences(grid);
        assert.sameOrderedMembers(sequences[0], [3]);
        assert.sameOrderedMembers(sequences[1], [1, 4]);
        assert.sameOrderedMembers(sequences[2], [2]);
    });
});

describe('createDiagonalUpSequences', function() {
    it('returns the diagonal sequences', function() {
        const grid = [[1, 2], [3, 4]];
        const sequences = createDiagonalUpSequences(grid);
        assert.sameOrderedMembers(sequences[0], [1]);
        assert.sameOrderedMembers(sequences[1], [3, 2]);
        assert.sameOrderedMembers(sequences[2], [4]);
    });
});

describe('findGreatestXProduct', function() {
    describe('directional sequences', function() {
        it('finds horizontal', function() {
            const grid = [[5, 5], [2, 2]];
            assert.equal(findGreatestXProduct(grid, 2), 25);
        });

        it('finds vertical', function() {
            const grid = [[2, 5], [2, 5]];
            assert.equal(findGreatestXProduct(grid, 2), 25);
        });

        it('finds diagonal down', function() {
            const grid = [[5, 2], [2, 5]];
            assert.equal(findGreatestXProduct(grid, 2), 25);
        });

        it('find diagonal up', function() {
            const grid = [[2, 5], [5, 2]];
            assert.equal(findGreatestXProduct(grid, 2), 25);
        });
    });
});
