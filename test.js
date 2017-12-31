let assert = require('chai').assert;

let {
    isMultipleOf3_or_5,
    listMultiplesOf3_or_5_belowX,
    sumOfList,
    sumOfMultiplesOf3_or_5_belowX
} = require('./one');

describe('isMultipleOf3_or_5', function() {
    it('should correctly identify 3', function() {
        assert.equal(isMultipleOf3_or_5(3), true);
    });

    it('should correctly identify 5', function() {
        assert.equal(isMultipleOf3_or_5(5), true);
    });

    it('should exclude non-multiples', function() {
        assert.equal(isMultipleOf3_or_5(2), false);
    });

    it('should identify multiples', function() {
        assert.equal(isMultipleOf3_or_5(6), true);
    });
});

describe('listMultiplesOf3_or_5_belowX', function() {
    it('should be an empty list below 3', function() {
        let multiples = listMultiplesOf3_or_5_belowX(3);
        assert.sameMembers(multiples, []);
    });

    it('should contain the baseline of numbers below 10', function() {
        let multiples = listMultiplesOf3_or_5_belowX(10);
        assert.sameMembers(multiples, [3, 5, 6, 9]);
    });
});

describe('sumOfList', function() {
    it('should return 0 for an empty list', function() {
        assert.equal(sumOfList([]), 0);
    });

    it('should return the number for a singleton list', function() {
        assert.equal(sumOfList([5]), 5);
    });

    it('should sum multiple terms', function() {
        assert.equal(sumOfList([1, 2, 3]), 6);
    });
});

describe('sumOfMultiplesOf3_or_5_belowX', function() {
    it('should handle the base case of 10', function() {
        let result = sumOfMultiplesOf3_or_5_belowX(10);
        assert.equal(result, 23);
    });
});
