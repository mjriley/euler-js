'use strict';
/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

/* Strategy:
Create an iterator to generate each prime below a given number (two million).
Sum the iterator to get our answer.
Treat this as an iterator so that we don't need to keep all the primes in memory
*/

const { getNextPrime } = require('../util/primes');
const _ = require('lodash');

function* getPrimesBelowX(x) {
    let lastPrime = 0;
    while (true) {
        let currentPrime = getNextPrime(lastPrime);
        if (currentPrime >= x) {
            break;
        }

        yield currentPrime;
        lastPrime = currentPrime;
    }
}

function sumOfPrimesBelowX(x) {
    return _.reduce([...getPrimesBelowX(x)], _.add);
}

module.exports = {
    getPrimesBelowX,
    sumOfPrimesBelowX
};

function main() {
    const answer = sumOfPrimesBelowX(2000000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
