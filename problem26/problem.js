'use strict';

/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

/* Strategy:
This problem seems to have a bit of complexity.
For any given fraction, two possibilities exist -- either the number divides into a 'clean' decimal, so the length of the cycle is 0,
or it has an infinite cycle. The problem with an infinite cycle is that the length of the cycle could outpace what javascript can normally represent.
If that were the case, we'd still need to report it as the actual answer, so we have to solve that problem somehow.
Given this problem, it seems the best way to approach this problem is to code our own long division algorithm. In long division, we'll know we have a cycle
as soon as we detect a dividend that we've handled previously.
So, we can start doing long division, and keep track of every 'dividend' we run into, pushing them into an array. We'll check each new dividend against
our previous dividends, and when a match is found, the length of the cycle will be the current index - matching index

Once we have that algorithm in place, we simply need to iterate from 2 to 1000, and record the highest d value found.
*/

const _ = require('lodash');

function getCycleLength(divisor) {
    let divisors = [];
    let quotient = 0;

    for (
        let dividend = 1, remainder = 1;
        remainder !== 0;
        dividend = remainder * 10
    ) {
        const previousIndex = divisors.indexOf(dividend);
        if (previousIndex !== -1) {
            // we've found a cycle
            return divisors.length - previousIndex;
        }

        divisors.push(dividend);
        ({ quotient, remainder } = getQuotientAndRemainder(dividend, divisor));
    }

    // if the remainder was 0, then the fraction has no cycle
    return 0;
}

function getQuotientAndRemainder(dividend, divisor) {
    return {
        quotient: Math.floor(dividend / divisor),
        remainder: dividend % divisor
    };
}

function getLongestSequenceBelowX(x) {
    let largestDenominator = 2;
    let largestCycleLength = getCycleLength(2);
    for (let i = 3; i < x; ++i) {
        let cycleLength = getCycleLength(i);
        if (cycleLength > largestCycleLength) {
            largestCycleLength = cycleLength;
            largestDenominator = i;
        }
    }

    return largestDenominator;
}

function main() {
    const answer = getLongestSequenceBelowX(1000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    getCycleLength,
    getQuotientAndRemainder,
    getLongestSequenceBelowX
};
