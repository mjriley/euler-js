'use strict';

const assert = require('chai').assert;
const {
    nameValue,
    letterValue,
    getScoredValues,
    getTotalScores,
    readFile,
    splitFileIntoNames,
    sortNames
} = require('./problem');

describe('letterValue', function() {
    it('correctly identifies A', function() {
        assert.equal(letterValue('A'), 1);
    });

    it('correctly identifies Z', function() {
        assert.equal(letterValue('Z'), 26);
    });
});

describe('nameValue', function() {
    it('returns 0 for an empty string', function() {
        assert.equal(nameValue(''), 0);
    });

    it('returns the letter value for a one-letter name', function() {
        assert.equal(nameValue('A'), 1);
    });

    it('returns the collective value of all characters', function() {
        assert.equal(nameValue('COLIN'), 53);
    });
});

describe('getScoredValues', function() {
    it('multiplies the name value by the position within the list', function() {
        const input = ['COLIN', 'COLIN'];
        assert.sameOrderedMembers(getScoredValues(input), [53, 106]);
    });
});

describe('getTotalScores', function() {
    it('adds the scores together', function() {
        const input = ['COLIN', 'COLIN'];
        assert.equal(getTotalScores(input), 159);
    });
});

describe('readFile', function() {
    it('reads the input file', function() {
        const fileStart = readFile('./p022_names.txt').substr(0, 6);
        assert.equal(fileStart, '"MARY"');
    });
});

describe('splitFileIntoNames', function() {
    it('removes quotes from a single name', function() {
        const input = '"COLIN"';
        assert.sameOrderedMembers(splitFileIntoNames(input), ['COLIN']);
    });

    it('processes a list of items', function() {
        const input =
            '"MARY","PATRICIA","LINDA","BARBARA","ELIZABETH","JENNIFER","MARIA"';
        assert.sameOrderedMembers(splitFileIntoNames(input), [
            'MARY',
            'PATRICIA',
            'LINDA',
            'BARBARA',
            'ELIZABETH',
            'JENNIFER',
            'MARIA'
        ]);
    });
});

describe('sortNames', function() {
    it('sorts the names by alphabetical order', function() {
        const names = [
            'MARY',
            'PATRICIA',
            'LINDA',
            'BARBARA',
            'ELIZABETH',
            'JENNIFER',
            'MARIA'
        ];

        assert.sameOrderedMembers(sortNames(names), [
            'BARBARA',
            'ELIZABETH',
            'JENNIFER',
            'LINDA',
            'MARIA',
            'MARY',
            'PATRICIA'
        ]);
    });
});
