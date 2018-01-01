/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/* Strategy:
    Classify 3-digit numbers as 100-999 (i.e. leading 0s won't be considered digits).
    Iterate through left-handed multipliers, starting from 999 down to 100.
    for each left-hand multiplier, iterate through a second loop
    starting from 999 down to 100.
    Multiply the two multipliers together.
    For each product, determine if the product is a palindrome.
    If the product is a palindrome, we can exit out of the inner-loop, because no lesser right-hand multiplier will create a larger palindrome.
    For a further optimization, we can keep track of the highest right-hand multiplier, and end each inner-loop iteration when it reaches that number.
    This works because, if we've found a palindrome produced from (X1) * (Y1), where X1 is the left hand multiplier and Y1 is the right hand multiplier, 
    any (X2) * (Y2), where (X2 < X1) and (Y2 <= Y1), will produce a product that is less than the palindrome already found.
*/

const _ = require('lodash');

function isPalindrome(candidate) {
    let numberString = candidate.toString();

    for (
        let startIndex = 0, endIndex = numberString.length - 1;
        startIndex < endIndex;
        startIndex++, endIndex--
    ) {
        if (!hasSameDigits(numberString, startIndex, endIndex)) {
            return false;
        }
    }

    return true;
}

function hasSameDigits(candidate, startIndex, endIndex) {
    return candidate[startIndex] === candidate[endIndex];
}

function getHighestXDigitPalindromeProduct(numDigits) {
    let upperBound = Math.pow(10, numDigits);
    let lowerBound = Math.pow(10, numDigits - 1);

    let highestFoundMultiplier = lowerBound;
    let highestPalindrome = 0;

    // function getHighestMultiplierAndPalindrome(leftMultiplier) {
    //     for (
    //         let multiplier = upperBound - 1;
    //         multiplier >= highestFoundMultiplier;
    //         --multiplier
    //     ) {
    //         let product = leftMultiplier * multiplier;
    //         if (isPalindrome(product)) {
    //             highestFoundMultiplier = rightMultiplier;

    //             return {
    //                 multiplier,
    //                 palindrome: product
    //             };
    //         }
    //             highestPalindrome = product;
    //             highestFoundMultiplier = rightMultiplier; // save the multiplier for the loop optimizations

    //             break; // optimization -- if a palindrome was found for X * Y, there is no sense in trying to find a larger palindrome for X * (Y - Z),
    //             // because it will always be smaller
    //         }
    //     }

    // }

    // stopping at the highest previously found multiplier on the outer loop is an optimization -- since both multiplier are 3 digits,
    // if we found a product for X * Y, we want to avoid checking Y * X. Since we iterate downwards, if a product was found for X * Y, X will be the highest multiplier for Y,
    // so there's no point in finding a palindrome again for Y.
    for (
        let leftMultiplier = upperBound - 1;
        leftMultiplier >= highestFoundMultiplier;
        --leftMultiplier
    ) {
        // stopping on the highest previously found multiplier is an optimization -- since we found that multiplier on a higher left multiplier,
        // there would be no way for a lower right multiplier to be greater than the multiplier already found
        for (
            let rightMultiplier = upperBound - 1;
            rightMultiplier >= highestFoundMultiplier;
            --rightMultiplier
        ) {
            let product = leftMultiplier * rightMultiplier;
            if (isPalindrome(product) && product > highestPalindrome) {
                highestPalindrome = product;
                highestFoundMultiplier = rightMultiplier; // save the multiplier for the loop optimizations

                break; // optimization -- if a palindrome was found for X * Y, there is no sense in trying to find a larger palindrome for X * (Y - Z),
                // because it will always be smaller
            }
        }
    }

    return highestPalindrome;
}

module.exports = {
    isPalindrome,
    getHighestXDigitPalindromeProduct
};

function main() {
    let answer = getHighestXDigitPalindromeProduct(3);
    console.log('answer is: ', answer);
}

main();
