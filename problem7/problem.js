'use strict';

const { isPrime } = require('../util/primes');

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

/* Strategy:
create a function to find the next prime. Call this function until we've generated all 10001 primes, and then return the final answer
*/

function getNextPrime(base) {
    let candidate = base + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }

    return candidate;
}

function getNthPrime(n) {
    let prime = 0;

    for (let i = 0; i < n; ++i) {
        prime = getNextPrime(prime);
    }

    return prime;
}

module.exports = {
    getNextPrime,
    getNthPrime
};

function main() {
    let answer = getNthPrime(10001);
    console.log('answer is: ', answer);
}

main();
