'use strict';

/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

/* Strategy:
Straight-forward. We need two functions -- one to find the factorial of a number, and the other to find the sum of a number's digits.
The sum of a number's digits is easy -- convert the number to a string, split it between every character, and then sum up each parseInt()'d digit.
The factorial is also easy provided 100! is small enough to fit into javascript's number class.

Update -- 100! is FAR too large for javascript's number class. We'll leverage the bigint library instead, and then sum the digits the same way
*/

const _ = require('lodash');
const bigInt = require('big-integer');

function sumOfDigits(number) {
    const numString = number.toString();
    const digits = numString.split('').map(digit => parseInt(digit));
    return _.reduce(digits, _.add, 0);
}

function factorial(number) {
    if (number.eq(1)) {
        return bigInt(1);
    }

    return number.multiply(factorial(number.subtract(1)));
}

module.exports = {
    sumOfDigits,
    factorial
};

function main() {
    const factorialAnswer = factorial(bigInt(100));
    const sum = sumOfDigits(factorialAnswer);
    console.log('answer is: ', sum);
}

if (require.main === module) {
    main();
}
