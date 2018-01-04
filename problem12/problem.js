'use strict';

/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

/* Strategy:
- we need a function to find all divisors of a given number
- we need a function (generator function) to generate triangle numbers
- we can brute force to find the number of divisors by simply continually generating the next triangle number and testing it for the number of divisors.
    the first number we find with over X divisors is our answer.
- if speed is an issue, we can optimize the algorithm by memoizing the factor algorithm. Given our answer will have 500 factors, many composite factors (like 6), will continually pop up.
- if we iterate downwards from X / 2, and we encounter a factor we've stored, we can just immediately add all of its factors
*/

function* triangleNumbers() {
    let sum = 0;
    for (let i = 1; ; ++i) {
        sum += i;
        yield sum;
    }
}

function isFactor(dividend, divisor) {
    return dividend % divisor === 0;
}

// the first iteration of this caused the solution to be essentially unresponsive -- it was just brute force attempt,
// going from 1 to the dividend, checking for successful division.
// modifying the algorith to consistently reduce the upper bound caused the problem to return immediately
function numberOfDivisors(dividend) {
    let highestFound = dividend;

    let numFound = 0;

    for (let candidate = 1; candidate <= highestFound; ++candidate) {
        if (isFactor(dividend, candidate)) {
            numFound++;

            let divisor = dividend / candidate;
            if (candidate !== divisor) {
                numFound++;
            }

            highestFound = divisor - 1;
        }
    }

    return numFound;
}

function firstTriangleNumberWithMoreThanXDivisors(x) {
    let gen = triangleNumbers();
    for (let triangleNumber of gen) {
        let numDivisors = numberOfDivisors(triangleNumber);
        if (numDivisors > x) {
            return triangleNumber;
        }
    }
}

module.exports = {
    isFactor,
    triangleNumbers,
    numberOfDivisors,
    firstTriangleNumberWithMoreThanXDivisors
};

function main() {
    let answer = firstTriangleNumberWithMoreThanXDivisors(500);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}