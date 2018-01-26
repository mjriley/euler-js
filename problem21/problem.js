'use strict';
/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

/* Strategy:
First, we need a function to find the proper divisors of a number.
Second, we create a second function to sum up those divisors.

A third function should be created to determine whether a number is an amicable number.
We can then iterate from 1 to 9999, summing up all the amicable numbers found.
One consideration is that if a number belongs to an amicable pair, it means that both it and its corresponding number will need to be checked twice.
A naive implementation can just evaluate them numbers twice. If this proves to be a bottleneck, the domain of numbers to evaluate (10000) is small enough that we
can fit all of them into an array. The isAmicable() function can then be written in such a way that it first checks to see if the number is already cached in our array.
If it is, it can use the result. If it isn't, it can perform the computation as normal, but then store that computation in the array for future use.
*/

const _ = require('lodash');

function sumOfAmicableNumbersBelow(ceiling) {
    return _.reduce(getAmicableNumbersBelow(ceiling), _.add, 0);
}

function getAmicableNumbersBelow(ceiling) {
    return _.range(1, ceiling).filter(isAmicable);
}

function isAmicable(number) {
    const sumForNumber = sumOfProperDivisors(number);

    if (number === sumForNumber || sumForNumber === 0) {
        // amicable numbers cannot equal their pair
        return false;
    }

    const sumForPairing = sumOfProperDivisors(sumForNumber);

    return number === sumForPairing;
}

function isDivisor(candidateDivisor, dividend) {
    if (candidateDivisor === dividend) {
        return false;
    }

    return dividend % candidateDivisor === 0;
}

function getDivisors(number) {
    let candidates = _.range(1, number);
    let divisors = candidates.filter(candidate => isDivisor(candidate, number));
    return divisors;
}

function sumOfProperDivisors(number) {
    return _.reduce(getDivisors(number), _.add, 0);
}

function main() {
    const answer = sumOfAmicableNumbersBelow(10000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    isDivisor,
    getDivisors,
    sumOfProperDivisors,
    isAmicable,
    getAmicableNumbersBelow
};
