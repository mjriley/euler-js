'use strict';

const assert = require('chai').assert;

const { moveDown, moveRight, Grid } = require('./problem');

describe('moveDown', function() {
    it('should move the position downwards', function() {
        assert.sameOrderedMembers(moveDown([0, 0]), [1, 0]);
    });
});

describe('moveRight', function() {
    it('should move the position right', function() {
        assert.sameOrderedMembers(moveRight([0, 0]), [0, 1]);
    });
});

describe('numPaths', function() {
    it('should have 1 path when already at the exit', function() {
        const grid = new Grid(2, 2);
        assert.equal(grid.numPaths([2, 2]), 1);
    });

    it('should have 0 paths when it is off the grid vertically', function() {
        const grid = new Grid(2, 2);
        assert.equal(grid.numPaths([3, 2]), 0);
    });

    it('should have 0 paths when it is off the grid horizontally', function() {
        const grid = new Grid(2, 2);
        assert.equal(grid.numPaths([2, 3]), 0);
    });

    it('should count the number of paths going down and right', function() {
        const grid = new Grid(2, 2);
        assert.equal(grid.numPaths([1, 1]), 2);
    });

    it('should match the example case', function() {
        const grid = new Grid(2, 2);
        assert.equal(grid.numPaths([0, 0]), 6);
    });
});
