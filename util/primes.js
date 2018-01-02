'use strict';

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

module.exports = {
    isPrime
};
