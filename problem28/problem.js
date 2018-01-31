'use strict';

/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

/* Strategy:
To do this, I think it's necessary to create an algorithm to generate the spiral. This isn't immediately straight-forward to me.
The starting point is that we know how many numbers will be contained in the grid. I.e. a 5x5 grid is automatically going to contain 25 numbers.
We also know that 1 will be the center, which would be at (length / 2, height / 2) or (2, 2) if we represent this is a 2D array.
Working it out on a sheet of paper, it looks like, if we call the travel distance in any one direction D, we start with a D of 1.
Move East by D, then South by D. Increment D. Then Go West by D, then North by D. Increment D. Continue this way until we're out of numbers.

Once that algorithm is finished, we also need a function to find the diagonal sum of a 2D array, both diag down and diag up. This should be straight-forward.
It would seem obvious to get the sum of diag down, then the sum of diag up, and then add them together and get our answer. However, there is the small consideration
that the center point, 1, will get included in both. So, we sum the two diagonals, and then subtract 1.
*/

function diagonalSpiralSum(length) {
    const spiral = generateSpiralOfLength(length);
    return sumOfDiagonals(spiral);
}

function generateSpiralOfLength(length) {
    let rows = [];
    for (let i = 0; i < length; ++i) {
        rows[i] = [];
    }

    const mid = Math.floor(length / 2);
    rows[mid][mid] = 1;

    let currentNumber = 1;
    let x = mid;
    let y = mid;
    let d = 1;

    let totalNumbers = length * length;

    while (!(x === length - 1 && y === 0)) {
        // handle EAST
        for (let i = 0; i < d; ++i) {
            x++;
            currentNumber++;

            if (currentNumber > totalNumbers) {
                return rows;
            }

            rows[y][x] = currentNumber;
        }

        // handle SOUTH
        for (let i = 0; i < d; ++i) {
            y++;
            currentNumber++;
            rows[y][x] = currentNumber;
        }

        d++;

        // handle WEST
        for (let i = 0; i < d; ++i) {
            x--;
            currentNumber++;
            rows[y][x] = currentNumber;
        }

        // handle NORTH
        for (let i = 0; i < d; ++i) {
            y--;
            currentNumber++;
            rows[y][x] = currentNumber;
        }

        d++;
    }

    return rows;
}

function diagDownSum(input) {
    let sum = 0;
    for (let i = 0; i < input.length; ++i) {
        sum += input[i][i];
    }
    return sum;
}

function diagUpSum(input) {
    let sum = 0;
    for (let i = 0; i < input.length; ++i) {
        sum += input[i][input.length - 1 - i];
    }
    return sum;
}

function sumOfDiagonals(input) {
    return diagDownSum(input) + diagUpSum(input) - 1;
}

function main() {
    const answer = diagonalSpiralSum(1001);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    diagDownSum,
    diagUpSum,
    sumOfDiagonals,
    generateSpiralOfLength,
    diagonalSpiralSum
};
