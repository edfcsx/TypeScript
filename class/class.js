"use strict";
var Data = /** @class */ (function () {
    function Data(day, month, year) {
        if (day === void 0) { day = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1994; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return Data;
}());
var brithDay = new Data(5, 9, 1994);
console.log(brithDay.day);
var DataX = /** @class */ (function () {
    function DataX(dia, month, year) {
        if (dia === void 0) { dia = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1970; }
        this.dia = dia;
        this.month = month;
        this.year = year;
    }
    return DataX;
}());
