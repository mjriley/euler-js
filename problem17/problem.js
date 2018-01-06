'use strict';

/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

/* Strategy:
The main part of this problem seems to be converting a number to its written equivalent.
Once that algorithm is done, we need a function to count the letters in the written version (excluding spaces and hyphens)
Then, we simply iterate from 1 to 1000, returning the sum of all the counts

Since we only need to go to one-thousand, we can proceed digit by digit, entering each term into a lookup table. The numbers 0-9 have their own written name. 
10-19 also have their own equivalent. From 20-99, the written version is [ten's digit name] + digit. For 100-999, it is [hundred's digit] hundred and [10-99] output
1000 will be a one-off.
*/

const DIGITS = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
};

const TENS_DIGIT = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
};

function toEnglish(number) {
    if (number === 1000) {
        return 'one thousand';
    }

    if (number < 20) {
        return DIGITS[number];
    }

    const digitString = number.toString();

    if (number < 100) {
        return getTens(digitString);
    }

    if (number >= 100) {
        const hundredsDigit = digitString[0];
        if (digitString[1] === '0' && digitString[2] === '0') {
            return DIGITS[hundredsDigit] + ' hundred';
        }

        return DIGITS[hundredsDigit] + ' hundred and ' + getTens(digitString);
    }
}

function getTens(digits) {
    const tensIndex = digits.length - 2;
    const onesIndex = digits.length - 1;

    if (digits[tensIndex] < 2) {
        const number = parseInt(digits.substring(tensIndex));
        return DIGITS[number];
    }

    const tensTerm = TENS_DIGIT[digits[tensIndex]];

    if (digits[onesIndex] === '0') {
        return tensTerm;
    }
    return tensTerm + '-' + DIGITS[digits[onesIndex]];
}

function letterCount(numberString) {
    // remove all spaces and hyphens
    const trimmedString = numberString.replace(/[- ]/g, '');
    return trimmedString.length;
}

function lettersUsed(number) {
    return letterCount(toEnglish(number));
}

// inclusive
function sumOfWrittenNumbersFromXToY(x, y) {
    let total = 0;
    for (let i = x; i <= y; ++i) {
        total += lettersUsed(i);
    }

    return total;
}

module.exports = {
    toEnglish,
    letterCount,
    lettersUsed,
    sumOfWrittenNumbersFromXToY
};

function main() {
    const answer = sumOfWrittenNumbersFromXToY(1, 1000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
