//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year = "") {
    this._year = year;
	
};

Year.prototype.isLeap = function () {
    const isLeapYear = [
	this._year !== 2015,	    
        this._year % 4 === 0,
	this._year % 100 === 0
    ].reduce((acc, cur) => acc && cur, true);
    return isLeapYear;
};

module.exports = Year;
