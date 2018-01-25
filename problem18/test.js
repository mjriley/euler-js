'use strict';

const assert = require('chai').assert;
const {
    getStartingIndex,
    createElements,
    getMaximumTotal,
    getMaximumTotalAt
} = require('./problem');

describe('getStartingIndex', function() {
    it('calculates the starting index for height 0', function() {
        assert.equal(getStartingIndex(0), 0);
    });

    it('calculates the starting index for height 1', function() {
        assert.equal(getStartingIndex(1), 1);
    });

    it('calculates the starting index for height 2', function() {
        assert.equal(getStartingIndex(2), 3);
    });

    it('calculates the starting index for height 3', function() {
        assert.equal(getStartingIndex(3), 6);
    });
});

describe('createElements', function() {
    const input = `
01 02
03 04
`;

    it('builds the array correctly', function() {
        const elements = createElements(input);
        assert.equal(elements[0], 1);
    });

    it('handles the second row', function() {
        const elements = createElements(input);
        assert.equal(elements[3], 4);
    });
});

describe('getMaximumTotalAt', function() {
    it('returns the element itself if the requested height is the bottom of the tree', function() {
        const elements = [1, 2, 3];
        assert.equal(getMaximumTotalAt(elements, 1, 0), 2);
    });

    it('calculates multiple rows', function() {
        const elements = [1, 2, 3];
        assert.equal(getMaximumTotalAt(elements, 0, 0), 4);
    });
});

describe('getMaximumTotal', function() {
    it('passes the example', function() {
        const input = `
3
7 4
2 4 6
8 5 9 3
        `;
        const elements = createElements(input);
        assert.equal(getMaximumTotal(elements), 23);
    });
});
