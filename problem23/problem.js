'use strict';
/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

/* Strategy:
We'll need to create a list of all abundant numbers.
Since we know that all numbers greater than 28123 can be written as the sum of two abundant numbers, we only need to iterate from 1 to 28122 in order to find all numbers
 that cannot meet this criteria.
Once we have a list of all abundant numbers, we can create a function to determine if a number is the sum of two abundant numbers. This function likely can brute force through pairings --
for each abundant number, it can test each additional abundant number until a matching sum is found, or the sum is greater than our candidate number.

In order to determine abundant numbers, we'll need a way to get the proper divisors of a number (from a previous problem) as well as a way to sum those divisors (also from a previous problem)
*/

const _ = require('lodash');
const { sumOfProperDivisors } = require('../util/divisors');

function getAbundantNumbersBelow(number) {
    const candidates = _.range(12, number);
    return candidates.filter(isAbundant);
}

function isAbundant(number) {
    return sumOfProperDivisors(number) > number;
}

let abundantNumbers = getAbundantNumbersBelow(28123);

function getNonAbundantSumNumbersBelow(number) {
    let candidates = _.range(1, number);
    return candidates.filter(candidate => !isSumOfAbundantNumbers(candidate));
}

function isSumOfAbundantNumbers(number) {
    for (
        let addendIndex = 0;
        addendIndex < abundantNumbers.length;
        ++addendIndex
    ) {
        for (
            let augendIndex = addendIndex;
            augendIndex < abundantNumbers.length;
            ++augendIndex
        ) {
            const sum =
                abundantNumbers[addendIndex] + abundantNumbers[augendIndex];
            if (sum === number) {
                return true;
            } else if (sum > number) {
                break;
            }
        }

        if (abundantNumbers[addendIndex] > number / 2) {
            break;
        }
    }

    return false;
}

function main() {
    const answer = _.reduce(getNonAbundantSumNumbersBelow(28123), _.add, 0);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    isAbundant,
    getAbundantNumbersBelow,
    isSumOfAbundantNumbers,
    getNonAbundantSumNumbersBelow
};
