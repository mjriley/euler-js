'use strict';

/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

/* Strategy:
Permutations are a recursive problem. We can iterate through each element of the sequence in order, and then return the permutations as:
 Current Element + (Ordered Permutations of Sequence - 1).
Given that we're asked to deal with one million elements, and the sequence might contain significantly more elements, I think its worth trying this as a generator solution.
We can continually generate just a single element at a time until we've generated the 1 millionth element, and then return that. 
There is the challenge that for this to be a recursive problem, javascript needs to be able to handle recursion 10 deep, but I think that's a reasonable ask.

UPDATE -- the current solution is a bit slow. Right now, the algorithm is doing a lot of repeated work. For example, when calculating the permutations of [0, 1, 2, 3],
I'm going to have to generate the permutations of [2, 3] twice -- once for 0, and once for 1. When we tack on additional numbers, this repetition only gets worse and worse.
We could trade off time for space and cache the results of these computations. At a certain point, however, caching the data would be too expensive -- i.e. do we really want to
cache a sequence on 1 million elements? We could compromise and only cache sequences of under X elements.
*/

const _ = require('lodash');

function* getPermutations(elements) {
    if (elements.length === 1) {
        yield elements[0].toString();
    } else if (elements.length > 1) {
        for (let i = 0; i < elements.length; ++i) {
            const currentElement = elements[i].toString();
            const remainingElements = createSequenceWithoutIndex(elements, i);

            const childPermutations = getPermutations(remainingElements);
            for (let childPermutation of childPermutations) {
                yield currentElement + childPermutation;
            }
        }
    }
}

function getNthElement(sequence, n) {
    let i = 0;
    for (let it = sequence.next(); !it.done; it = sequence.next()) {
        i++;
        if (i === n) {
            return it.value;
        }
    }
}

function createSequenceWithoutIndex(sequence, index) {
    const start = sequence.slice(0, index);
    const end = sequence.slice(index + 1);
    return [...start, ...end];
}

function main() {
    const gen = getPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const answer = getNthElement(gen, 1000000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    getPermutations,
    getNthElement
};
