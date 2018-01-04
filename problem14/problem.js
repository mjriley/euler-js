'use strict';

/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/* Strategy:
Create a generator function for the sequence.
Create a function to get the number of terms in a terminated sequence.
Iterate from 1 to 1 million, figuring out how many terms are in each sequence, and keeping track of the number with the most terms
Given that the search space is relatively small, we can optimize the function which gets the number of terms by storing previous results -- it just requires a table of 1 million entries, which is reasonable
*/

function nextCollatz(number) {
    return number % 2 === 0 ? number / 2 : 3 * number + 1;
}

function* collatz(base) {
    if (base <= 0) {
        throw new Error('base must be a positive integer');
    }

    let number = base;

    for (; number > 1; number = nextCollatz(number)) {
        yield number;
    }

    yield number;
}

function collatzLength(base) {
    const seq = collatz(base);

    let numTerms = 0;

    for (let x of seq) {
        numTerms++;
    }

    return numTerms;
}

function longestCollatzLengthBelowX(x) {
    let highest = { term: 1, length: 1 };

    for (let i = 1; i < x; ++i) {
        let length = collatzLength(i);
        if (length > highest.length) {
            highest.term = i;
            highest.length = length;
        }
    }

    return highest;
}

module.exports = {
    collatz,
    collatzLength,
    longestCollatzLengthBelowX
};

function main() {
    const answer = longestCollatzLengthBelowX(1000000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
