'use strict';

const assert = require('chai').assert;

const { getPermutations, getNthElement } = require('./problem');

describe('getPermutations', function() {
    it('should indicate the sequence is done if no elements are available', function() {
        const generator = getPermutations([]);
        assert.isTrue(generator.next().done);
    });

    it('should return the single element, if only one element is available', function() {
        const permutations = [...getPermutations([1])];
        assert.sameOrderedMembers(permutations, ['1']);
    });

    it('should generate permutations of multiple elements', function() {
        const permutations = [...getPermutations([1, 2])];
        assert.sameOrderedMembers(permutations, ['12', '21']);
    });

    it('should generate all permutations for 3 levels', function() {
        const permutations = [...getPermutations([0, 1, 2])];
        assert.sameOrderedMembers(permutations, [
            '012',
            '021',
            '102',
            '120',
            '201',
            '210'
        ]);
    });
});

describe('getNthElement', function() {
    it('should handle generators', function() {
        const generator = getPermutations([1, 2]);
        assert.equal(getNthElement(generator, 1), '12');
    });

    it('should return the nth element', function() {
        const generator = getPermutations([0, 1, 2]);
        assert.equal(getNthElement(generator, 3), '102');
    });
});
