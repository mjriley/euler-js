'use strict';

/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, 
begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, 
multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

/* Strategy:
Isolate out the file-reading portion of this exercise.
This basically means, take an array, sort it, then perform the computations. We can tack on file-reading after the initial portion is complete.
We'll need a function to compute the alphabetical value for each name.
We'll also need a function to map the names to their scores.
I'd like to have a separate 'score' function, but given that its just multiplication of two numbers, it seems like needless confusion.

The only hurdle that comes to mind is the size of the file. If javascript doesn't handle sorting 50K names at once, we'll need to create some workarounds.
Perhaps we could try to create file 'buckets' for each letter, to attempt to create manageable list sizes, and then work from there.
During computation, we could also work on a buffer rather than hold the entire array in memory simultaneously.

As with the other exercises, however, the most straight-forward method is to just do this all in memory, all at once, so we'll attempt that until execution speed
proves otherwise.


UPDATE -- Javascript handles the file basically instantly. No reason to optimize unless we care about memory efficiency.
*/

const fs = require('fs');
const _ = require('lodash');

function getTotalScores(names) {
    return _.reduce(getScoredValues(names), _.add, 0);
}

function getScoredValues(names) {
    return names.map((name, index) => nameValue(name) * (index + 1));
}

function nameValue(name) {
    const characters = name.split('');
    const characterValues = characters.map(letterValue);

    return _.reduce(characterValues, _.add, 0);
}

const STARTING_INDEX = 'A'.charCodeAt(0);

function letterValue(letter) {
    return letter.charCodeAt(0) - STARTING_INDEX + 1;
}

function readFile(path) {
    return fs.readFileSync(path, 'utf8');
}

function splitFileIntoNames(input) {
    return input.split(',').map(removeQuotes);
}

function sortNames(names) {
    return names.sort();
}

function removeQuotes(name) {
    return name.replace(/\"/g, '');
}

function processFile(path) {
    const contents = readFile(path);
    const orderedNames = sortNames(splitFileIntoNames(contents));

    return getTotalScores(orderedNames);
}

function main() {
    const answer = processFile('./p022_names.txt');
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}

module.exports = {
    letterValue,
    nameValue,
    getScoredValues,
    getTotalScores,
    readFile,
    splitFileIntoNames,
    sortNames
};
