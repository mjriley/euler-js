'use strict';
/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/* Strategy:
Factorize each number into primes.
Starting from the highest number downwards, add the primes to a list, such that that all its primes are fully accounted for in the list
At the end, simply multiply all of the primes together for the answer
*/

const _ = require('lodash');

function isPrime(candidate) {
    if (candidate < 2) {
        return false;
    }

    const upperBound = Math.sqrt(candidate);
    for (let i = 2; i <= upperBound; ++i) {
        if (candidate % i === 0) {
            return false;
        }
    }

    return true;
}

function findLowestPrimeFactor(product) {
    for (let i = 2; i < product; ++i) {
        if (product % i === 0) {
            return i;
        }
    }

    throw new Error('no prime factor found for: ' + product);
}

function factorizeIntoPrimes(number) {
    if (isPrime(number)) {
        return [number];
    }

    // other, factor it!
    const factor = findLowestPrimeFactor(number);
    return _.concat(factorizeIntoPrimes(number / factor), factor);
}

function combineLists(existingList, termsToAdd) {
    const existingCounts = _.countBy(existingList, _.identity);
    const newCounts = _.countBy(termsToAdd, _.identity);

    // record how often each list item should occur, taking the maximum from each list
    const combinedCounts = _.assignWith(
        existingCounts,
        newCounts,
        (objValue, srcValue) => Math.max(objValue || 0, srcValue || 0)
    );

    // convert the frequency list back into an array, including each item according to its frequency
    return _.reduce(
        combinedCounts,
        (elements, value, key) =>
            _.concat(elements, _.times(value, _.constant(parseInt(key)))),
        []
    );
}

function smallestNumberDivisibleBy(numbers) {
    // get rid of 1, if it's included -- its redundant and messes up our prime strategy
    const numbersWithoutOne = _.pull(numbers, 1);

    const factors = numbersWithoutOne.map(factorizeIntoPrimes);
    const reducedFactors = _.reduce(factors, (collection, currentFactors) =>
        combineLists(collection, currentFactors)
    );

    const answer = _.reduce(
        reducedFactors,
        (product, factor) => product * factor
    );

    return answer;
}

module.exports = {
    isPrime,
    factorizeIntoPrimes,
    combineLists,
    findLowestPrimeFactor,
    smallestNumberDivisibleBy
};

function main() {
    const answer = smallestNumberDivisibleBy(_.range(1, 21));
    console.log('answer is: ', answer);
}

main();
