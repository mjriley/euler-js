'use strict';

/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

/* Strategy:
This seems like a straight-forward problem: just find the result of 2^1000, and then pump it through a function that retrieves the sum of the digits.
The two potential problems, however:
1) 2^1000 is likely in scientific number territory, so it won't be easy to individually look at the digits
2) 2^1000 might just be impractical to compute.

The simplest thing to do would be to see how long javascript takes to compute 2^1000, and go from there.

- Javascript actually computes 2^1000 incredibly quickly, but it is indeed in scientific notation.
Now the question is if we can extract the digits from a scientific notation number.
If not, we're going to be forced to use something like a bigint library or use string multiplication
*/

const bigInt = require('big-integer');
const _ = require('lodash');

function sumOfDigits(number) {
    const digits = number
        .toString()
        .split('')
        .map(digit => parseInt(digit));
    return _.reduce(digits, _.add);
}

module.exports = {
    sumOfDigits
};

function main() {
    const answer = sumOfDigits(bigInt(2).pow(1000));
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
