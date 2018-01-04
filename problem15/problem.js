'use strict';

/* 
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

/* Strategy:
This appears to be a recursive problem -- if we frame it as recording each move and trying to get to the 'exit', we can phrase the problem like:
numPaths to exit:
- if at exit -- 1 path
- otherwise, return (moveDown + numPathsToExit) + (moveRight + numPathsToExit)
if we ever move beyond the grid dimensions, then the number of paths is 0

NOTE: when trying to brute force the algorithm and not store anything, the algorithm stalled and took too long.
Memoizing the results for the number of paths corrected the issue
*/

function moveDown(coords) {
    return [coords[0] + 1, coords[1]];
}

function moveRight(coords) {
    return [coords[0], coords[1] + 1];
}

class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.memoPaths = {};
    }

    numPaths(coords) {
        if (coords[0] === this.height && coords[1] === this.width) {
            return 1;
        }

        if (coords[0] > this.height || coords[1] > this.width) {
            return 0;
        }

        const coordKey = coords[0] + ',' + coords[1];
        if (coordKey in this.memoPaths) {
            return this.memoPaths[coordKey];
        }

        const totalPaths =
            this.numPaths(moveDown(coords)) + this.numPaths(moveRight(coords));

        this.memoPaths[coordKey] = totalPaths;

        return totalPaths;
    }
}

module.exports = {
    moveDown,
    moveRight,
    Grid
};

function main() {
    const grid = new Grid(20, 20);
    const answer = grid.numPaths([0, 0]);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
