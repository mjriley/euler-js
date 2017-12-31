/* Problem One

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

*/

'use strict';

let _ = require('lodash');

function isMultipleOf3_or_5(input) {
    return !(input % 3) || !(input % 5);
}

function listMultiplesOf3_or_5_belowX(x) {
    let range = _.range(1, x);
    return _.filter(range, isMultipleOf3_or_5);
}

function sumOfList(list) {
    if (!list.length) {
        return 0;
    }

    return _.reduce(list, (sum, n) => sum + n);
}

function sumOfMultiplesOf3_or_5_belowX(x) {
    let multiples = listMultiplesOf3_or_5_belowX(x);
    return sumOfList(multiples);
}

module.exports = {
    isMultipleOf3_or_5,
    listMultiplesOf3_or_5_belowX,
    sumOfList,
    sumOfMultiplesOf3_or_5_belowX
};

function main() {
    let answer = sumOfMultiplesOf3_or_5_belowX(1000);
    console.log('Answer is: ', answer);
}

main();
