class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number = 1, month: number = 1, year: number = 1994) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const brithDay = new Data(5, 9, 1994);
console.log(brithDay.day);

class DataX {
  constructor(public dia: number = 1, public month :number = 1, public year: number = 1970) {}
}