'use strict';

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

/* Strategy:
-- initialize the largest factor to number / 2 (it doesn't matter if its actually a factor or not, because its only a bound, and it may not be prime)
- iterate from 2 to the largest factor
- for each number,
- identify if the number if a factor (isFactor function required)
 - if it is a factor, update the largest factor bound
 -  identify if the number is prime (isPrime function required)
- return the largest of the prime factors
*/

function isFactor(candidateDivisor, product) {
    return product % candidateDivisor === 0;
}

function isPrime(candidate) {
    if (candidate === 1) {
        return false;
    }

    // the boundary will be truncated below half, but it is irrelevant, because no number above that boundary could divide our candidate evenly anyway
    const boundary = candidate / 2;

    for (let x = 2; x < boundary; ++x) {
        if (candidate % x === 0) {
            // the number has factors
            return false;
        }
    }

    return true;
}

function getLargestPrimeFactor(product) {
    let largestPrime = 0;
    let upperBound = product / 2;
    let candidate = 2;

    while (candidate <= upperBound) {
        if (isFactor(candidate, product)) {
            // update the upperBound
            upperBound = product / candidate;
            if (isPrime(candidate)) {
                largestPrime = candidate;
            }
        }

        candidate += 1;
    }

    return largestPrime;
}

module.exports = {
    isFactor,
    isPrime,
    getLargestPrimeFactor
};

function main() {
    let answer = getLargestPrimeFactor(600851475143);
    console.log('answer is: ', answer);
}

main();
