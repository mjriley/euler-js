#!/usr/bin/env node
'use strict';

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

/* Strategy:
We could brute force it. First, select a number for a, then a value greater than or equal to a for b.  
Compute what the value of c would then need to be to make a + b + c = 1000.
sum the squares of a and b and determine if the sum is the square of c.
If so, return our answer. If not, continue iterating on b, until b > c. At that point, iterate on a.

Functions required:
- isPythagoreanTriple
*/

function isPythagoreanTriple(a, b, c) {
    return a * a + b * b === c * c;
}

function _sum(a, b, c) {
    return a + b + c;
}

function getTripleWithSum(sum) {
    for (let a = 1; a < sum / 3; ++a) {
        for (let b = a, c = sum - a - b; b < c; ++b, c = sum - a - b) {
            if (isPythagoreanTriple(a, b, c)) {
                if (_sum(a, b, c) === sum) {
                    return {
                        a,
                        b,
                        c
                    };
                }
            }
        }
    }

    throw new Error('No Triple found with sum: ' + sum);
}

function getProductOfTripleWithSum(sum) {
    const { a, b, c } = getTripleWithSum(sum);
    return a * b * c;
}

module.exports = {
    isPythagoreanTriple,
    getTripleWithSum,
    getProductOfTripleWithSum
};

function main() {
    const answer = getProductOfTripleWithSum(1000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
