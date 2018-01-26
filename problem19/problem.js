'use strict';

/*
You are given the following information, but you may prefer to do some research for yourself.

* 1 Jan 1900 was a Monday.
* Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
* A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

/* Strategy:
Create a function to find the day of the week for any given input day. Then, we can iterate through each month from Jan 1901 to Dec 2000,
running each of the first days through the function, and summing up all that are Sundays
*/

const _ = require('lodash');

function numberOfFirstMonthSundays(startYear, endYear) {
    const years = _.range(startYear, endYear + 1);
    const numberOfSundays = years.map(getFirstMonthSundaysInYear);

    return _.reduce(numberOfSundays, _.add, 0);
}

function getFirstMonthSundaysInYear(year) {
    const months = _.range(1, 13);
    const firstDays = months.map(month => getDayOfWeek(month, 1, year));
    return firstDays.filter(day => day === 0).length;
}

function getDayOfWeek(month, day, year) {
    let totalDays = 0;

    const years = _.range(1900, year);
    const yearDays = years.map(year => getDaysInYear(year));
    totalDays = _.reduce(yearDays, _.add, 0);

    let months = _.range(1, month);
    const monthDays = months.map(month => getDaysInMonth(month, year));
    totalDays += _.reduce(monthDays, _.add, 0);

    return (totalDays + day) % 7;
}

function getDaysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }

    // Only centuries divisible by 400 are leap years
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    return true;
}

function getDaysInMonth(month, year) {
    const thirty_day_months = [4, 6, 9, 11];
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }

    if (thirty_day_months.includes(month)) {
        return 30;
    }

    return 31;
}

module.exports = {
    numberOfFirstMonthSundays,
    getDayOfWeek
};

function main() {
    const answer = numberOfFirstMonthSundays(1901, 2000);
    console.log('answer is: ', answer);
}

if (require.main === module) {
    main();
}
