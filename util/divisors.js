/* From Problem 21 */
const _ = require('lodash');

function isDivisor(candidateDivisor, dividend) {
    if (candidateDivisor === dividend) {
        return false;
    }

    return dividend % candidateDivisor === 0;
}

function getDivisors(number) {
    let highest = number;
    let divisors = [];

    for (let i = 1; i < highest; ++i) {
        if (isDivisor(i, number)) {
            divisors.push(i);
            const otherDivisor = number / i;
            if (i !== otherDivisor && i !== 1) {
                divisors.push(otherDivisor);
                highest = otherDivisor;
            }
        }
    }

    return divisors;
}

function sumOfProperDivisors(number) {
    return _.reduce(getDivisors(number), _.add, 0);
}

module.exports = {
    isDivisor,
    getDivisors,
    sumOfProperDivisors
};
/********************************/
