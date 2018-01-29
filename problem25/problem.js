'use strict';

/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

/* Strategy:
This appears to be straight-forward, and once again, it is suitable for generators. We create a generator to represent the fibonacci sequence.
We then iterate through the terms of that sequence until we find a number that has over 1000 digits. Obviously, the hang up here is that a 1000-digit number
is well beyond the limits of the numbers javascript handles naturally. We'll cheat and use the big-int library to work around that limitation.
*/

const bigInt = require('big-integer');

function hasNDigits(number, digits) {
    return number.toString().length === digits;
}

function getFirstIndexWhere(seq, predicate) {
    let numDigits = 0;
    let index = 1;

    for (let it = seq.next(); !it.done; it = seq.next()) {
        if (predicate(it.value)) {
            return index;
        }

        index++;
    }
}

function* fib() {
    let prev = bigInt(0);
    let current = bigInt(1);
    while (true) {
        yield current;
        [prev, current] = [current, prev.add(current)];
    }
}

function main() {
    const seq = fib();
    const answer = getFirstIndexWhere(seq, ele => hasNDigits(ele, 1000));
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    hasNDigits,
    fib,
    getFirstIndexWhere
};
