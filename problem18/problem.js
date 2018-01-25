/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
*/

/*
Strategy: This appears to be a recursive problem -- the maximum total at height N (where height goes from bottom to top) is X + max(max_total(N - 1, left), max_total(N - 1, right))
We do need a data structure to represent the input. The simplest thing is to represent this as an array, where each row for a given height contains height + 1 elements.
*/

const _ = require('lodash');

function getStartingIndex(height) {
    if (height === 0) {
        return 0;
    }

    return getStartingIndex(height - 1) + height;
}

function createElements(inputString) {
    const rows = inputString.trim().split('\n');
    var strElements = _.flatMap(rows, row => row.split(' '));
    return strElements.map(element => parseInt(element));
}

function getMaximumTotal(elements) {
    return getMaximumTotalAt(elements, 0, 0);
}

function getMaximumTotalAt(elements, height, index) {
    const startingIndex = getStartingIndex(height);
    if (startingIndex >= elements.length) {
        return 0;
    }

    return (
        elements[startingIndex + index] +
        Math.max(
            getMaximumTotalAt(elements, height + 1, index),
            getMaximumTotalAt(elements, height + 1, index + 1)
        )
    );
}

const input = `
75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`;

function main() {
    const elements = createElements(input);
    const answer = getMaximumTotal(elements);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    getStartingIndex,
    createElements,
    getMaximumTotal,
    getMaximumTotalAt
};
