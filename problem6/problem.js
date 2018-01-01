'use strict';
/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// Note -- there are no tests for this one because the problem was incredibly straight-forward

const _ = require('lodash');

function sumOfSquaresOfNumbers(numbers) {
    const squares = _.map(numbers, number => number * number);
    return _.reduce(squares, _.add);
}

function squareOfSumOfNumbers(numbers) {
    const sum = _.reduce(numbers, _.add);
    return sum * sum;
}

function differenceOfSquaresOfFirstXNumbers(x) {
    const numbers = _.range(1, x + 1);
    return squareOfSumOfNumbers(numbers) - sumOfSquaresOfNumbers(numbers);
}

module.exports = {
    sumOfSquaresOfNumbers,
    squareOfSumOfNumbers,
    differenceOfSquaresOfFirstXNumbers
};

function main() {
    const answer = differenceOfSquaresOfFirstXNumbers(100);
    console.log('answer is: ', answer);
}

main();
