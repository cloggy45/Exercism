//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
    this._year = year;
	
};

Year.prototype.isLeap = function () {
    const year = this._year;
    
    const conditions = [
        year % 4 === 0,
        year % 100 !== 0,
        ]
    
    return conditions.reduce((a,b) => a && b, true) || (year % 400 == 0);
};

module.exports = Year;
