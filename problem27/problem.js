'use strict';

/*
Euler discovered the remarkable quadratic formula:

n^2 + n + 41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40, 40^2 + 40 + 41 = 40(40+1) is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible by 41.

The incredible formula n^2 − 79n +1601 was discovered, which produces 80 primes for the consecutive values 0 ≤ n ≤ 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/

/* Strategy:
This seems like it should be straight forward --
We need a function to determine whether a number is prime. Then, we should create a function to determine the consecutive primes for a given a and b.
Then, we simply iterate through all possible values of a and b (keeping in mind the possibilities for negative numbers), and record which pairing generates the most consecutive primes.
Finally, simply return the product of a and b.

At first, I'd like to try just brute forcing the problem. However, given all the possible permutations of a and b, it's likely that we do a lot of repeated work finding whether a given number is prime.
If the final solution takes too long, it's likely that we can speed up the problem by caching the prime lookups.
*/

const { isPrime } = require('../util/primes');

function evaluateQuadradic(a, b, n) {
    return n * n + a * n + b;
}

function getConsecutivePrimes(a, b) {
    let i = 0;
    while (isPrime(evaluateQuadradic(a, b, i))) {
        i++;
    }

    return i;
}

function getConsecutivePrimeCoefficients(upperBound) {
    let best = {
        a: 0,
        b: 0,
        numConsecutive: 0
    };

    for (let a = -upperBound + 1; a < upperBound; ++a) {
        for (let b = -upperBound; b <= upperBound; ++b) {
            let numFound = getConsecutivePrimes(a, b);
            if (numFound > best.numConsecutive) {
                best = { a, b, numConsecutive: numFound };
            }
        }
    }

    return best;
}

function main() {
    const { a, b, numConsecutive } = getConsecutivePrimeCoefficients(1000);
    const product = a * b;

    console.log('answer is: ', product);
}

if (require.main === module) {
    main();
}

module.exports = {
    evaluateQuadradic,
    getConsecutivePrimes,
    getConsecutivePrimeCoefficients
};
