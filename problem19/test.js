'use strict';

const assert = require('chai').assert;

const { getDayOfWeek, numberOfFirstMonthSundays } = require('./problem');

describe('getDayOfWeek', function() {
    it('returns Monday for January 1, 1900', function() {
        assert.equal(getDayOfWeek(1, 1, 1900), 1);
    });

    it('handles the first week of 1900', function() {
        assert.equal(getDayOfWeek(1, 5, 1900), 5);
    });

    it('handles the second week of 1900', function() {
        assert.equal(getDayOfWeek(1, 7, 1900), 0);
    });

    describe('month handling', function() {
        it('knows january has 31 days', function() {
            assert.equal(getDayOfWeek(2, 1, 1900), 4);
        });

        it('knows feburary has 28 days', function() {
            assert.equal(getDayOfWeek(3, 1, 1900), 4);
        });

        it('knows march has 31 days', function() {
            assert.equal(getDayOfWeek(4, 1, 1900), 0);
        });

        it('knows april has 30 days', function() {
            assert.equal(getDayOfWeek(5, 1, 1900), 2);
        });

        it('knows may has 31 days', function() {
            assert.equal(getDayOfWeek(6, 1, 1900), 5);
        });

        it('knows june has 30 days', function() {
            assert.equal(getDayOfWeek(7, 1, 1900), 0);
        });

        it('knows july has 31 days', function() {
            assert.equal(getDayOfWeek(8, 1, 1900), 3);
        });

        it('knows august has 31 days', function() {
            assert.equal(getDayOfWeek(9, 1, 1900), 6);
        });

        it('knows september has 30 days', function() {
            assert.equal(getDayOfWeek(10, 1, 1900), 1);
        });

        it('knows october has 31 days', function() {
            assert.equal(getDayOfWeek(11, 1, 1900), 4);
        });

        it('knows november has 30 days', function() {
            assert.equal(getDayOfWeek(12, 1, 1900), 6);
            assert.equal(getDayOfWeek(12, 31, 1900), 1);
        });
    });

    it('correctly calculates Jan 1, 1901', function() {
        assert.equal(getDayOfWeek(1, 1, 1901), 2);
    });

    it('correctly calculates Jan 1, 1902', function() {
        assert.equal(getDayOfWeek(1, 1, 1902), 3);
    });

    it('handles leap years', function() {
        assert.equal(getDayOfWeek(2, 1, 1904), 1);
        assert.equal(getDayOfWeek(2, 29, 1904), 1);
        assert.equal(getDayOfWeek(3, 1, 1904), 2);
    });

    it('knows a leap year has 366 days', function() {
        assert.equal(getDayOfWeek(12, 31, 1904), 6);
        assert.equal(getDayOfWeek(1, 1, 1905), 0);
    });

    it('treats 2000 as a leap year', function() {
        assert.equal(getDayOfWeek(2, 29, 2000), 2);
        assert.equal(getDayOfWeek(3, 1, 2000), 3);
    });
});

describe('numberOfFirstMonthSundays', function() {
    it('calculates 1900', function() {
        assert.equal(numberOfFirstMonthSundays(1900, 1900), 2);
    });

    it('handles 1900-1901', function() {
        assert.equal(numberOfFirstMonthSundays(1900, 1901), 4);
    });
});

/*
Jan 1, 8, 15, 22, 29 -- Monday
Jan 31 -- Wednesday
Feb 1, 8, 15, 22 -- Thursday
Feb 28 -- Wednesday
March 1, 8, 15, 22, 29 -- Thursday
March 31 -- Saturday
April 1, 8, 15, 22, 29 -- Sunday
April 30 -- Monday
May 1, 8, 15, 22, 29 -- Tuesday
May 31 -- Thursday
June 1, 8, 15, 22, 29 -- Friday
June 30 -- Saturday
July 1, 8, 15, 22, 29 -- Sunday
July 31 -- Tuesday
Aug 1, 8, 15, 22, 29 -- Wednesday
Aug 31 -- Friday
Sept 1, 8, 15, 22, 29 -- Saturday
Sept 30 -- Sunday 
Oct 1, 8, 15, 22, 29 -- Monday 
Oct 31 -- Wednesday
Nov 1, 8, 15, 22, 29 -- Thursday
Nov 30 -- Friday
Dec 1, 8, 15, 22, 29 -- Saturday
Dec 31 -- Monday
Jan 1, 1901 -- Tuesday
Feb 1, 1901 -- Friday
March 1, 1901 -- Friday
April 1, 1901 -- Monday
May 1, 1901 -- Wednesday
June 1, 1901 -- Saturday
July 1, 1901 -- Monday
August 1, 1901 -- Thursday
Sept 1, 1901 -- Sunday
Oct 1, 1901 -- Tuesday
Nov 1, 1901 -- Friday
Dec 1, 1901 -- Sunday
*/
