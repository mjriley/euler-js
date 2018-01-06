'use strict';

const assert = require('chai').assert;

const {
    toEnglish,
    letterCount,
    lettersUsed,
    sumOfWrittenNumbersFromXToY
} = require('./problem');

describe('toEnglish', function() {
    it('handles individual digits', function() {
        assert.equal(toEnglish(1), 'one');
        assert.equal(toEnglish(2), 'two');
        assert.equal(toEnglish(3), 'three');
        assert.equal(toEnglish(4), 'four');
        assert.equal(toEnglish(5), 'five');
        assert.equal(toEnglish(6), 'six');
        assert.equal(toEnglish(7), 'seven');
        assert.equal(toEnglish(8), 'eight');
        assert.equal(toEnglish(9), 'nine');
    });

    it('handles 10-19', function() {
        assert.equal(toEnglish(10), 'ten');
        assert.equal(toEnglish(11), 'eleven');
        assert.equal(toEnglish(12), 'twelve');
        assert.equal(toEnglish(13), 'thirteen');
        assert.equal(toEnglish(14), 'fourteen');
        assert.equal(toEnglish(15), 'fifteen');
        assert.equal(toEnglish(16), 'sixteen');
        assert.equal(toEnglish(17), 'seventeen');
        assert.equal(toEnglish(18), 'eighteen');
        assert.equal(toEnglish(19), 'nineteen');
    });

    it('handles the tens digit', function() {
        assert.equal(toEnglish(10), 'ten');
        assert.equal(toEnglish(20), 'twenty');
        assert.equal(toEnglish(30), 'thirty');
        assert.equal(toEnglish(40), 'forty');
        assert.equal(toEnglish(50), 'fifty');
        assert.equal(toEnglish(60), 'sixty');
        assert.equal(toEnglish(70), 'seventy');
        assert.equal(toEnglish(80), 'eighty');
        assert.equal(toEnglish(90), 'ninety');
    });

    it('handles 21-99', function() {
        assert.equal(toEnglish(21), 'twenty-one');
        assert.equal(toEnglish(99), 'ninety-nine');
    });

    it('handles hundreds', function() {
        assert.equal(toEnglish(100), 'one hundred');
        assert.equal(toEnglish(900), 'nine hundred');
    });

    it('handles 101-999', function() {
        assert.equal(toEnglish(101), 'one hundred and one');
        assert.equal(toEnglish(999), 'nine hundred and ninety-nine');
    });

    it('handles one thousand', function() {
        assert.equal(toEnglish(1000), 'one thousand');
    });
});

describe('letterCount', function() {
    it('returns the length of a single number', function() {
        assert.equal(letterCount('one'), 3);
    });

    it('ignores hyphens', function() {
        assert.equal(letterCount('forty-two'), 8);
    });

    it('ignores spaces', function() {
        assert.equal(letterCount('one hundred and two'), 16);
    });
});

describe('lettersUsed', function() {
    it('handles 342', function() {
        assert.equal(lettersUsed(342), 23);
    });

    it('handles 115', function() {
        assert.equal(lettersUsed(115), 20);
    });
});

describe('sumOfWrittenNumbersFromXToY', function() {
    it('should match the example', function() {
        assert.equal(sumOfWrittenNumbersFromXToY(1, 5), 19);
    });
});
